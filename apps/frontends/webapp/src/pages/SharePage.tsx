import React, { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { trpc } from '../utils/trpc';
import { useAuth } from '../hooks/useAuth';
import { 
  Share2, 
  Instagram, 
  Facebook, 
  Camera, 
  Upload, 
  MapPin, 
  Coins, 
  CheckCircle2, 
  AlertCircle,
  Image as ImageIcon,
  Video,
  ExternalLink,
  Copy,
  Hash
} from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

interface SocialPost {
  platform: 'instagram' | 'facebook';
  content: string;
  media?: File;
  venue: any;
  hashtags: string[];
}

export default function SharePage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State management
  const [selectedVenue, setSelectedVenue] = useState<any>(null);
  const [platform, setPlatform] = useState<'instagram' | 'facebook'>('instagram');
  const [postContent, setPostContent] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [customHashtags, setCustomHashtags] = useState('');
  const [shareStatus, setShareStatus] = useState<'idle' | 'sharing' | 'success' | 'error'>('idle');
  const [shareResult, setShareResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch venues for selection
  const { data: venues, isLoading: venuesLoading } = trpc.venues.getVenues.useQuery({
    limit: 50,
    includeSocialMedia: true
  });

  // Share mutation
  const shareMutation = trpc.share.createPost.useMutation({
    onSuccess: (data) => {
      setShareResult(data);
      setShareStatus('success');
    },
    onError: (error) => {
      setErrorMessage(error.message || 'Failed to create social post');
      setShareStatus('error');
    }
  });

  // Handle venue selection
  const handleVenueSelect = (venueId: string) => {
    const venue = venues?.find(v => v.id === venueId);
    setSelectedVenue(venue);
    if (venue) {
      // Generate default post content
      generateDefaultContent(venue);
    }
  };

  // Generate default post content based on venue
  const generateDefaultContent = (venue: any) => {
    const defaultContent = `Had an amazing time at ${venue.name}! 🎉\n\nGreat ${venue.category?.toLowerCase() || 'experience'} and fantastic atmosphere. Highly recommend checking it out! 📍`;
    setPostContent(defaultContent);
  };

  // Handle media upload
  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMediaFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setMediaPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove media
  const removeMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Generate hashtags based on venue
  const generateVenueHashtags = (venue: any) => {
    const hashtags = ['#T4G', '#Tag4Gift'];
    
    if (venue.name) {
      hashtags.push(`#${venue.name.replace(/\s+/g, '').toLowerCase()}`);
    }
    
    if (venue.category) {
      hashtags.push(`#${venue.category.toLowerCase()}`);
    }
    
    if (venue.city) {
      hashtags.push(`#${venue.city.replace(/\s+/g, '').toLowerCase()}`);
    }

    // Add platform-specific hashtags
    if (platform === 'instagram') {
      hashtags.push('#insta', '#photooftheday');
    } else {
      hashtags.push('#facebook', '#checkin');
    }

    return hashtags;
  };

  // Get final hashtags (venue + custom)
  const getFinalHashtags = () => {
    const venueHashtags = selectedVenue ? generateVenueHashtags(selectedVenue) : ['#T4G'];
    const custom = customHashtags
      .split(' ')
      .filter(tag => tag.trim().length > 0)
      .map(tag => tag.startsWith('#') ? tag : `#${tag}`);
    
    return [...venueHashtags, ...custom];
  };

  // Copy content to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Could add a toast notification here
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  // Handle share submission
  const handleShare = async () => {
    if (!selectedVenue || !postContent.trim()) return;

    setShareStatus('sharing');
    
    try {
      const hashtags = getFinalHashtags();
      const fullContent = `${postContent}\n\n${hashtags.join(' ')}`;
      
      // Create form data for file upload if media exists
      const formData = new FormData();
      formData.append('platform', platform);
      formData.append('content', fullContent);
      formData.append('venueId', selectedVenue.id);
      formData.append('hashtags', JSON.stringify(hashtags));
      
      if (mediaFile) {
        formData.append('media', mediaFile);
      }

      // Call the share API
      await shareMutation.mutateAsync({
        platform,
        content: fullContent,
        venueId: selectedVenue.id,
        hashtags,
        mediaType: mediaFile ? (mediaFile.type.startsWith('image/') ? 'image' : 'video') : undefined
      });

    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  // Reset form
  const resetForm = () => {
    setSelectedVenue(null);
    setPlatform('instagram');
    setPostContent('');
    setMediaFile(null);
    setMediaPreview(null);
    setCustomHashtags('');
    setShareStatus('idle');
    setShareResult(null);
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Render success state
  if (shareStatus === 'success' && shareResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-green-900/20 border-green-500/50">
            <CardHeader className="text-center">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-green-100">Post Created Successfully!</CardTitle>
              <CardDescription className="text-green-200">
                Your social media post has been prepared and coins have been awarded
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Rewards */}
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                <Coins className="w-5 h-5" />
                <span className="font-bold">+{shareResult.coinsEarned || 10} Share Coins</span>
              </div>

              {/* Venue Info */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{selectedVenue.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {platform === 'instagram' ? 'Instagram' : 'Facebook'} Post
                </Badge>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-900/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-200 mb-2">Next Steps:</h3>
                <ol className="text-sm text-blue-100 space-y-1 list-decimal list-inside">
                  <li>Open {platform === 'instagram' ? 'Instagram' : 'Facebook'} app</li>
                  <li>Create a new post with your content</li>
                  <li>Tag the venue's social media account</li>
                  <li>Use the provided hashtags</li>
                  <li>Share your post publicly</li>
                </ol>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button 
                  onClick={() => {
                    const url = platform === 'instagram' 
                      ? 'https://instagram.com' 
                      : 'https://facebook.com';
                    window.open(url, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open {platform === 'instagram' ? 'Instagram' : 'Facebook'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetForm}
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Create Another Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render error state
  if (shareStatus === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="bg-red-900/20 border-red-500/50">
            <CardHeader className="text-center">
              <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <CardTitle className="text-red-100">Share Failed</CardTitle>
              <CardDescription className="text-red-200">
                {errorMessage || 'An error occurred while creating your social post'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setShareStatus('idle')}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Main sharing interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <Share2 className="w-16 h-16 text-purple-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">
            Share & Earn
          </h1>
          <p className="text-purple-200">
            Create social media posts about venues and earn share coins
          </p>
        </div>

        {/* Venue Selection */}
        <Card className="bg-black/40 border-purple-500/50">
          <CardHeader>
            <CardTitle className="text-purple-300">Select Venue</CardTitle>
            <CardDescription className="text-purple-200">
              Choose the venue you want to share about
            </CardDescription>
          </CardHeader>
          <CardContent>
            {venuesLoading ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-purple-300 mt-2">Loading venues...</p>
              </div>
            ) : (
              <select 
                value={selectedVenue?.id || ''} 
                onChange={(e) => handleVenueSelect(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled>Select a venue to share about</option>
                {venues?.map((venue) => (
                  <option key={venue.id} value={venue.id}>
                    {venue.name} {venue.category && `(${venue.category})`}
                  </option>
                ))}
              </select>
            )}
          </CardContent>
        </Card>

        {selectedVenue && (
          <>
            {/* Platform Selection */}
            <Card className="bg-black/40 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-300">Social Platform</CardTitle>
                <CardDescription className="text-purple-200">
                  Choose where you want to share
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={platform === 'instagram' ? 'default' : 'outline'}
                    onClick={() => setPlatform('instagram')}
                    className={`h-16 ${
                      platform === 'instagram'
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600'
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <Instagram className="w-6 h-6 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant={platform === 'facebook' ? 'default' : 'outline'}
                    onClick={() => setPlatform('facebook')}
                    className={`h-16 ${
                      platform === 'facebook'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <Facebook className="w-6 h-6 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Media Upload */}
            <Card className="bg-black/40 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-300">Media (Optional)</CardTitle>
                <CardDescription className="text-purple-200">
                  Add a photo or video to make your post more engaging
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!mediaPreview ? (
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300">Click to upload photo or video</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG, MP4 up to 10MB</p>
                  </div>
                ) : (
                  <div className="relative">
                    {mediaFile?.type.startsWith('image/') ? (
                      <img 
                        src={mediaPreview} 
                        alt="Preview" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={mediaPreview} 
                        className="w-full h-64 object-cover rounded-lg"
                        controls
                      />
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={removeMedia}
                      className="absolute top-2 right-2"
                    >
                      Remove
                    </Button>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleMediaUpload}
                  className="hidden"
                />
              </CardContent>
            </Card>

            {/* Post Content */}
            <Card className="bg-black/40 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-300">Post Content</CardTitle>
                <CardDescription className="text-purple-200">
                  Write your post content (we've provided a template to get you started)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Write something amazing about this venue..."
                  className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
                  maxLength={2000}
                />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {postContent.length}/2000 characters
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(postContent)}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hashtags */}
            <Card className="bg-black/40 border-purple-500/50">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center space-x-2">
                  <Hash className="w-5 h-5" />
                  <span>Hashtags</span>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  We'll automatically add venue-related hashtags. Add your own below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Auto-generated hashtags */}
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Auto-generated:</p>
                  <div className="flex flex-wrap gap-2">
                    {generateVenueHashtags(selectedVenue).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Custom hashtags */}
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Add your own (space-separated):</p>
                  <textarea
                    value={customHashtags}
                    onChange={(e) => setCustomHashtags(e.target.value)}
                    placeholder="foodie amazing experience"
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={2}
                  />
                </div>

                {/* Final hashtags preview */}
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">Final hashtags:</p>
                  <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                    {getFinalHashtags().map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-purple-300 border-purple-500">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(getFinalHashtags().join(' '))}
                    className="mt-2"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy Hashtags
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            {(selectedVenue.instagram || selectedVenue.facebook) && (
              <Card className="bg-black/40 border-purple-500/50">
                <CardHeader>
                  <CardTitle className="text-purple-300">Venue Social Accounts</CardTitle>
                  <CardDescription className="text-purple-200">
                    Don't forget to tag the venue in your post!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedVenue.instagram && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Instagram className="w-5 h-5 text-pink-400" />
                          <span className="text-white">@{selectedVenue.instagram}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(`@${selectedVenue.instagram}`)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    {selectedVenue.facebook && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Facebook className="w-5 h-5 text-blue-400" />
                          <span className="text-white">{selectedVenue.facebook}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(selectedVenue.facebook)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Share Button */}
            <Card className="bg-black/40 border-purple-500/50">
              <CardContent className="pt-6">
                <Button
                  onClick={handleShare}
                  disabled={!postContent.trim() || shareStatus === 'sharing'}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600"
                >
                  {shareStatus === 'sharing' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating Post...
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 mr-2" />
                      Create Social Post & Earn Coins
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-gray-400 mt-2">
                  You'll earn share coins after creating your post template
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}