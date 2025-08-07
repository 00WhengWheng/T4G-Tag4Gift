import React, { useState } from 'react';
import { useNavigate, useParams } from '@tanstack/react-router';
import { Calendar, Gift, ArrowLeft, Coins } from 'lucide-react';
import { trpc } from '../utils/trpc';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from '@t4g/ui-web';

interface GiftFormData {
  name: string;
  description: string;
  type: 'DRINK' | 'BOTTLE' | 'DISH' | 'PIZZA' | 'COFFEE' | 'DISCOUNT';
  value: number;
  currency: string;
  quantity: number;
  startDate: string;
  endDate: string;
  scanCoinsRequired: number;
  shareCoinsRequired: number;
  gameCoinsRequired: number;
}

export function CreateGiftForm() {
  const navigate = useNavigate();
  const params = useParams();
  const tenantId = params.tenantId as string;
  // Default timeframe: today to 1 month from today
  const today = new Date().toISOString().slice(0, 10);
  const monthLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const [formData, setFormData] = useState<GiftFormData>({
    name: '',
    description: '',
    type: 'DRINK',
    value: 10,
    currency: 'EUR',
    quantity: 1,
    startDate: today,
    endDate: monthLater,
    scanCoinsRequired: 10,
    shareCoinsRequired: 3,
    gameCoinsRequired: 10,
  });

  const createGiftMutation = trpc.gifts.create.useMutation({
    onSuccess: () => {
      console.log('Gift created successfully!');
      navigate({ to: '/gifts' });
    },
    onError: (error) => {
      console.error('Error creating gift:', error);
      // TODO: Show error toast/notification
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a gift name');
      return;
    }
    if (formData.value <= 0) {
      alert('Gift value must be greater than 0');
      return;
    }
    if (formData.quantity <= 0) {
      alert('Gift quantity must be at least 1');
      return;
    }
    // Build payload matching backend DTO
    const giftPayload = {
      name: formData.name,
      description: formData.description,
      type: formData.type,
      value: formData.value,
      currency: formData.currency,
      totalQuantity: formData.quantity,
      tenantId,
      startDate: `${formData.startDate}T00:00:00Z`,
      endDate: `${formData.endDate}T23:59:59Z`,
      coinRequirements: {
        scanCoins: formData.scanCoinsRequired,
        shareCoins: formData.shareCoinsRequired,
        gameCoins: formData.gameCoinsRequired,
      },
    };
    console.log('Creating gift:', giftPayload);
    createGiftMutation.mutate(giftPayload);
  };

  const handleInputChange = (field: keyof GiftFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate({ to: '/gifts' })}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gifts
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Gift</h1>
            <p className="text-gray-600 mt-2">
              Set up a new gift for your venue or challenge
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
          {/* Main Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gift Information</CardTitle>
                <CardDescription>
                  Enter the details about your gift
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gift Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g., Free Coffee Voucher"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gift Type *</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="COFFEE">☕ Coffee</option>
                    <option value="DRINK">🥤 Drink</option>
                    <option value="BOTTLE">🍾 Bottle</option>
                    <option value="DISH">🍽️ Dish</option>
                    <option value="PIZZA">🍕 Pizza</option>
                    <option value="DISCOUNT">💰 Discount</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gift Description</label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe the gift reward..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Value *</label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={formData.value}
                      onChange={(e) => handleInputChange('value', parseFloat(e.target.value) || 0)}
                      placeholder="10.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Currency *</label>
                    <input
                      type="text"
                      required
                      value={formData.currency}
                      onChange={(e) => handleInputChange('currency', e.target.value)}
                      placeholder="EUR"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Quantity *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                    placeholder="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Timeframe
                </CardTitle>
                <CardDescription>
                  Set when your gift will be available
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Start Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">End Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  Coin Requirements
                </CardTitle>
                <CardDescription>
                  Set the coin costs for gift redemption
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Scan Coins</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.scanCoinsRequired}
                    onChange={(e) => handleInputChange('scanCoinsRequired', parseInt(e.target.value) || 0)}
                    placeholder="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Share Coins</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.shareCoinsRequired}
                    onChange={(e) => handleInputChange('shareCoinsRequired', parseInt(e.target.value) || 0)}
                    placeholder="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Game Coins</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.gameCoinsRequired}
                    onChange={(e) => handleInputChange('gameCoinsRequired', parseInt(e.target.value) || 0)}
                    placeholder="10"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={createGiftMutation.isPending}
                    className="w-full"
                  >
                    {createGiftMutation.isPending ? 'Creating...' : 'Create Gift'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate({ to: '/gifts' })}
                    className="w-full"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}
