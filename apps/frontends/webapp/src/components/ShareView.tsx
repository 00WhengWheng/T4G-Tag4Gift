import React, { useState } from 'react';
import { trpc } from '../../utils/trpc';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { FacebookPayload, InstagramPayload, TikTokPayload } from '@/types/social';

const SHARE_TYPES = [
  { value: 'FACEBOOK', label: 'Facebook' },
  { value: 'INSTAGRAM', label: 'Instagram' },
  { value: 'TIKTOK', label: 'TikTok' },
];

type FacebookPayload = {
  accessToken: string;
  message: string;
  link?: string;
};

type InstagramPayload = {
  accessToken: string;
  imageUrl: string;
  caption?: string;
};

type TikTokPayload = {
  accessToken: string;
  videoUrl: string;
  title: string;
  description?: string;
};


// Modal wrapper
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareView: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [shareType, setShareType] = useState('FACEBOOK');
  const [facebookPayload, setFacebookPayload] = useState<FacebookPayload>({ accessToken: '', message: '', link: '' });
  const [instagramPayload, setInstagramPayload] = useState<InstagramPayload>({ accessToken: '', imageUrl: '', caption: '' });
  const [tiktokPayload, setTikTokPayload] = useState<TikTokPayload>({ accessToken: '', videoUrl: '', title: '', description: '' });
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const facebookMutation = trpc.shareToFacebook.useMutation();
  const instagramMutation = trpc.shareToInstagram.useMutation();
  const tiktokMutation = trpc.shareToTikTok.useMutation();

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShareType(e.target.value);
    setResult(null);
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (shareType === 'FACEBOOK') {
      setFacebookPayload(prev => ({ ...prev, [name]: value }));
    } else if (shareType === 'INSTAGRAM') {
      setInstagramPayload(prev => ({ ...prev, [name]: value }));
    } else if (shareType === 'TIKTOK') {
      setTikTokPayload(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    try {
      if (shareType === 'FACEBOOK') {
        const data = await facebookMutation.mutateAsync(facebookPayload);
        setResult(`Share successful! ID: ${data.id}`);
      } else if (shareType === 'INSTAGRAM') {
        const data = await instagramMutation.mutateAsync(instagramPayload);
        setResult(`Share successful! ID: ${data.id}`);
      } else if (shareType === 'TIKTOK') {
        const data = await tiktokMutation.mutateAsync(tiktokPayload);
        setResult(`TikTok published! ID: ${data.publishId}`);
      }
    } catch (err: any) {
      setError(err.message || 'Share failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 w-full max-w-xl">
        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={onClose}
            className="p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
            title="Close"
          >
            <span className="text-white text-lg">✕</span>
          </button>
        </div>
        <CardHeader>
          <CardTitle>Share to Social</CardTitle>
          <CardDescription>Share a post, image, or video to a supported social platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Share Type</label>
              <select name="shareType" value={shareType} onChange={handleTypeChange} className="w-full p-2 rounded border">
                {SHARE_TYPES.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            {shareType === 'FACEBOOK' && (
              <>
                <div>
                  <label className="block font-medium mb-1">Access Token</label>
                  <input name="accessToken" type="text" value={facebookPayload.accessToken} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Message</label>
                  <textarea name="message" value={facebookPayload.message} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Link (optional)</label>
                  <input name="link" type="url" value={facebookPayload.link || ''} onChange={handleChange} className="w-full p-2 rounded border" />
                </div>
              </>
            )}
            {shareType === 'INSTAGRAM' && (
              <>
                <div>
                  <label className="block font-medium mb-1">Access Token</label>
                  <input name="accessToken" type="text" value={instagramPayload.accessToken} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Image URL</label>
                  <input name="imageUrl" type="url" value={instagramPayload.imageUrl} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Caption (optional)</label>
                  <input name="caption" type="text" value={instagramPayload.caption || ''} onChange={handleChange} className="w-full p-2 rounded border" />
                </div>
              </>
            )}
            {shareType === 'TIKTOK' && (
              <>
                <div>
                  <label className="block font-medium mb-1">Access Token</label>
                  <input name="accessToken" type="text" value={tiktokPayload.accessToken} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Video URL</label>
                  <input name="videoUrl" type="url" value={tiktokPayload.videoUrl} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Title</label>
                  <input name="title" type="text" value={tiktokPayload.title} onChange={handleChange} className="w-full p-2 rounded border" required />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description (optional)</label>
                  <input name="description" type="text" value={tiktokPayload.description || ''} onChange={handleChange} className="w-full p-2 rounded border" />
                </div>
              </>
            )}
            <Button
              type="submit"
              disabled={
                (shareType === 'FACEBOOK' && facebookMutation.isLoading) ||
                (shareType === 'INSTAGRAM' && instagramMutation.isLoading) ||
                (shareType === 'TIKTOK' && tiktokMutation.isLoading)
              }
              className="w-full font-bold"
            >
              {(shareType === 'FACEBOOK' && facebookMutation.isLoading) ||
              (shareType === 'INSTAGRAM' && instagramMutation.isLoading) ||
              (shareType === 'TIKTOK' && tiktokMutation.isLoading)
                ? 'Sharing...'
                : 'Share'}
            </Button>
            {result && <div className="mt-2 text-green-600 font-semibold">{result}</div>}
            {error && <div className="mt-2 text-red-600 font-semibold">{error}</div>}
          </form>
        </CardContent>
      </div>
    </div>
  );
};

export default ShareView;
