import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function Scan() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-game-primary-300">
            Scan QR Code or NFC
          </h1>
          <p className="mt-2 text-game-primary-200">
            Point your camera at a venue's QR code or tap your phone to their NFC tag
          </p>
        </div>

        <Card className="bg-black/40 border-game-primary-600">
          <CardHeader>
            <CardTitle className="text-game-primary-300">Camera Scanner</CardTitle>
            <CardDescription className="text-game-primary-200">
              Position QR code in the frame
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-dashed border-game-primary-400 rounded mx-auto mb-2"></div>
                <p className="text-sm text-game-primary-300">Camera will activate here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <Button className="w-full bg-gradient-to-r from-game-primary-600 to-game-secondary-600">
            Enable Camera
          </Button>
          <Button variant="outline" className="w-full border-game-primary-600 text-game-primary-300">
            Use NFC Instead
          </Button>
        </div>
      </div>
    </div>
  );
}
