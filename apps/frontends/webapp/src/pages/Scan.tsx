import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { trpc } from '../utils/trpc';
import { useAuth } from '../hooks/useAuth';
import { QrCode, Camera, MapPin, Coins, Trophy, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export default function Scan() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isScanning, setIsScanning] = useState(false);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'success' | 'error' | 'cooldown'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [scannedVenue, setScannedVenue] = useState<any>(null);
  const [coinEarned, setCoinEarned] = useState<number | null>(null);
  const [userCoinBalance, setUserCoinBalance] = useState<number | null>(null);

  // tRPC mutations for scanning
  const scanVenueMutation = trpc.venues.scanVenue.useMutation({
    onSuccess: (data: any) => {
      console.log('Venue scan successful:', data);
      setScannedVenue(data.venue);
      setIsScanning(false);
      stopCamera();
      // Handle coin earned and user balance
      if (data.coinEarned) {
        setCoinEarned(data.coinEarned);
      }
      if (data.userCoinBalance) {
        setUserCoinBalance(data.userCoinBalance);
      }
      setScanStatus('success');
    },
    onError: (error: any) => {
      console.error('Venue scan failed:', error);
      // Handle cooldown error from backend
      if (error.data?.code === 'SCAN_COOLDOWN') {
        setScanStatus('cooldown');
        setErrorMessage(error.message || 'You have already scanned this venue recently. Try again later.');
      } else {
        setErrorMessage(error.message || 'Failed to scan venue');
        setScanStatus('error');
      }
      setIsScanning(false);
    }
  });

  // tRPC mutation for tag scan (new DTO)
  const scanTagMutation = trpc.tags.scanTag.useMutation({
    onSuccess: (data: any) => {
      setScannedVenue(data.venue || null);
      setIsScanning(false);
      stopCamera();
      if (data.coinEarned) setCoinEarned(data.coinEarned);
      if (data.userCoinBalance) setUserCoinBalance(data.userCoinBalance);
      setScanStatus(data.success ? 'success' : 'error');
      if (!data.success && data.reason) setErrorMessage(data.reason);
    },
    onError: (error: any) => {
      setErrorMessage(error.message || 'Failed to scan tag');
      setScanStatus('error');
      setIsScanning(false);
    }
  });

  // Start camera for QR scanning
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsCameraEnabled(true);
        setScanStatus('scanning');
        
        // Start scanning for QR codes
        startQRScanning();
      }
    } catch (error) {
      console.error('Camera access failed:', error);
      setErrorMessage('Unable to access camera. Please check permissions.');
      setScanStatus('error');
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraEnabled(false);
    setIsScanning(false);
    setScanStatus('idle');
  };

  // QR Code scanning logic
  const startQRScanning = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    setIsScanning(true);
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const scanFrame = () => {
      if (!isScanning || !context || !video.videoWidth) {
        requestAnimationFrame(scanFrame);
        return;
      }
      
      // Draw video frame to canvas
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get image data for QR detection
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      
      // Simple QR code pattern detection (you'd want to use a proper QR library like jsQR)
      // For now, let's simulate QR detection with a mock implementation
      detectQRCode(imageData);
      
      if (isScanning) {
        requestAnimationFrame(scanFrame);
      }
    };
    
    // Start scanning when video is ready
    video.addEventListener('loadedmetadata', () => {
      scanFrame();
    });
  };

  // Handle tag scan (QR or NFC) with geolocation
  const handleTagScan = async (tagIdentifier: string, scanType: 'QRCODE' | 'NFC' = 'QRCODE') => {
    if (!isAuthenticated || !user) {
      setErrorMessage('Please log in to scan tags');
      setScanStatus('error');
      return;
    }
    let latitude: number | undefined;
    let longitude: number | undefined;
    try {
      const position = await getCurrentLocation();
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    } catch (error) {
      // Location optional
    }
    scanTagMutation.mutate({
      tagIdentifier,
      scanType,
      latitude,
      longitude,
    });
  };

  // Mock QR detection (replace with actual QR library)
  const detectQRCode = (imageData: ImageData) => {
    // Use a real QR library like jsQR in production
    if (Math.random() < 0.001) {
      const mockTagId = 'tag_' + Date.now();
      handleTagScan(mockTagId, 'QRCODE');
    }
  };

  // Get current location
  const getCurrentLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
        return;
      }
      
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      });
    });
  };

  // Manual QR/NFC input for testing
  const handleManualInput = () => {
    const mockTagData = prompt('Enter Tag QR/NFC data (for testing):');
    if (mockTagData) {
      handleTagScan(mockTagData, 'QRCODE');
    }
  };

  // NFC scan logic (Web NFC API)
  const handleNFCScan = async () => {
    if (!('NDEFReader' in window)) {
      setErrorMessage('Web NFC not supported in this browser.');
      setScanStatus('error');
      return;
    }
    try {
      // @ts-ignore
      const ndef = new window.NDEFReader();
      await ndef.scan();
      ndef.onreading = (event: any) => {
        const decoder = new TextDecoder();
        for (const record of event.message.records) {
          if (record.recordType === 'text') {
            const nfcId = decoder.decode(record.data);
            handleTagScan(nfcId, 'NFC');
            break;
          }
        }
      };
      setScanStatus('scanning');
    } catch (error) {
      setErrorMessage('NFC scan failed: ' + (error.message || error));
      setScanStatus('error');
    }
  };

  // Reset scan state
  const resetScan = () => {
    setScanResult(null);
    setScanStatus('idle');
    setErrorMessage(null);
    setScannedVenue(null);
    setCoinEarned(null);
    stopCamera();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Render success state
  if (scanStatus === 'success' && scannedVenue) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6">
          <Card className="bg-green-900/20 border-green-500/50">
            <CardHeader className="text-center">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
              <CardTitle className="text-green-100">Scan Successful!</CardTitle>
              <CardDescription className="text-green-200">
                You've successfully tagged {scannedVenue.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Venue Info */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{scannedVenue.name}</span>
                </div>
                <p className="text-sm text-gray-300">{scannedVenue.address}</p>
              </div>

              {/* Coin Earned Animation */}
              {coinEarned && (
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center space-x-2 text-yellow-400 animate-pulse">
                    <Coins className="w-8 h-8" />
                    <span className="text-2xl font-bold">+{coinEarned} Scan Coin!</span>
                  </div>
                  {userCoinBalance !== null && (
                    <div className="mt-2 text-sm text-green-200">Your new balance: <span className="font-bold text-yellow-300">{userCoinBalance}</span> coins</div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="space-y-2">
                <Button 
                  onClick={() => navigate({ to: `/venue/${scannedVenue.id}` })}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  View Venue Details
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetScan}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Scan Another Venue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render error state
  if (scanStatus === 'error' || scanStatus === 'cooldown') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6">
          <Card className={scanStatus === 'cooldown' ? 'bg-yellow-900/20 border-yellow-500/50' : 'bg-red-900/20 border-red-500/50'}>
            <CardHeader className="text-center">
              {scanStatus === 'cooldown' ? (
                <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
              ) : (
                <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              )}
              <CardTitle className={scanStatus === 'cooldown' ? 'text-yellow-100' : 'text-red-100'}>
                {scanStatus === 'cooldown' ? 'Scan Cooldown' : 'Scan Failed'}
              </CardTitle>
              <CardDescription className={scanStatus === 'cooldown' ? 'text-yellow-200' : 'text-red-200'}>
                {errorMessage || (scanStatus === 'cooldown' ? 'You have already scanned this venue recently. Try again later.' : 'An error occurred while scanning')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={resetScan}
                className={scanStatus === 'cooldown' ? 'w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800' : 'w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'}
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Main scanning interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <QrCode className="w-16 h-16 text-purple-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">
            Scan Venue Tag
          </h1>
          <p className="text-purple-200">
            Point your camera at a venue's QR code to earn coins and unlock rewards
          </p>
        </div>

        {/* Camera Scanner */}
        <Card className="bg-black/40 border-purple-500/50">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span>Camera Scanner</span>
            </CardTitle>
            <CardDescription className="text-purple-200">
              {isCameraEnabled ? 'Point at QR code to scan' : 'Enable camera to start scanning'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              {isCameraEnabled ? (
                <>
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-lg"
                    playsInline
                    muted
                  />
                  <canvas 
                    ref={canvasRef} 
                    className="hidden" 
                  />
                  {/* Scanning overlay */}
                  <div className="absolute inset-4 border-2 border-dashed border-purple-400 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-purple-400">
                      <div className="w-full h-full border border-purple-300 animate-pulse"></div>
                    </div>
                  </div>
                  {/* Status indicator */}
                  {isScanning && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Scanning...
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center">
                  <Camera className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-purple-300">Camera preview will appear here</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="space-y-3">
          {!isCameraEnabled ? (
            <Button 
              onClick={startCamera}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Camera className="w-4 h-4 mr-2" />
              Enable Camera
            </Button>
          ) : (
            <Button 
              onClick={stopCamera}
              variant="destructive"
              className="w-full"
            >
              Stop Camera
            </Button>
          )}

          <Button 
            variant="outline" 
            onClick={handleManualInput}
            className="w-full border-purple-500 text-purple-300 hover:bg-purple-900/50"
          >
            <QrCode className="w-4 h-4 mr-2" />
            Manual Tag Input (Test)
          </Button>

          {/* NFC Scan Button (browser support only) */}
          <Button 
            variant="secondary"
            onClick={handleNFCScan}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            <QrCode className="w-4 h-4 mr-2" />
            Scan NFC Tag
          </Button>

          <div className="text-center">
            <Button 
              variant="link" 
              onClick={() => navigate({ to: '/map' })}
              className="text-purple-300 hover:text-white"
            >
              Browse Venues Instead
            </Button>
          </div>
        </div>

        {/* Tips */}
        <Card className="bg-purple-900/20 border-purple-500/30">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold text-purple-200 mb-2">Scanning Tips:</h3>
            <ul className="text-xs text-purple-300 space-y-1">
              <li>• Hold your phone steady and ensure good lighting</li>
              <li>• Keep the QR code centered in the frame</li>
              <li>• Make sure you're at the correct venue location</li>
              <li>• Earn coins each time you tag a new venue!</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
