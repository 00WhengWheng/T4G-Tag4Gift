import React, { useState } from 'react'
import { useNavigate, useParams } from '@tanstack/react-router'
import { Calendar, Clock, Trophy, Coins, Users, Gift, Star, ArrowLeft } from 'lucide-react'
import { trpc } from '../utils/trpc'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from '@t4g/ui-web'

interface ChallengeFormData {
  name: string
  description: string
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  scanCoins: number
  shareCoins: number
  gameCoins: number
  // Coin requirements for participation
  scanCoinsRequired: number
  shareCoinsRequired: number
  gameCoinsRequired: number
  // Gift fields
  giftName: string
  giftDescription: string
  giftType: 'DRINK' | 'BOTTLE' | 'DISH' | 'PIZZA' | 'COFFEE' | 'DISCOUNT'
  giftValue: number
  giftCurrency: string
  giftQuantity: number
}

  const navigate = useNavigate()
  const params = useParams()
  const tenantId = params.tenantId as string
  const [formData, setFormData] = useState<ChallengeFormData>({
    name: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    scanCoins: 3,
    shareCoins: 2,
    gameCoins: 5,
    // Coin requirements for participation
    scanCoinsRequired: 3,
    shareCoinsRequired: 1,
    gameCoinsRequired: 2,
    // Gift defaults
    giftName: '',
    giftDescription: '',
    giftType: 'DRINK',
    giftValue: 5,
    giftCurrency: 'EUR',
    giftQuantity: 1,
  })

  // tRPC mutation for creating challenges
  const createChallengeMutation = trpc.challenges.create.useMutation({
    onSuccess: () => {
      console.log('Challenge created successfully!')
      // Navigate back to challenges page
      navigate({ to: '/challenges' })
    },
    onError: (error) => {
      console.error('Error creating challenge:', error)
      // TODO: Show error toast/notification
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate gift fields
    if (!formData.giftName.trim()) {
      alert('Please enter a gift name');
      return;
    }
    if (formData.giftValue <= 0) {
      alert('Gift value must be greater than 0');
      return;
    }
    if (formData.giftQuantity <= 0) {
      alert('Gift quantity must be at least 1');
      return;
    }
    // Build payload matching backend DTO
    const challengePayload = {
      title: formData.name,
      description: formData.description,
      coinScanCost: formData.scanCoinsRequired,
      coinShareCost: formData.shareCoinsRequired,
      coinGameCost: formData.gameCoinsRequired,
      startDate: `${formData.startDate}T${formData.startTime}:00Z`,
      endDate: `${formData.endDate}T${formData.endTime}:00Z`,
      tenantId,
      gift: {
        name: formData.giftName,
        description: formData.giftDescription,
        giftType: formData.giftType,
        value: formData.giftValue,
        quantity: formData.giftQuantity,
        tenantId,
      }
    };
    console.log('Creating challenge:', challengePayload);
    createChallengeMutation.mutate(challengePayload);
  }

  const handleInputChange = (field: keyof ChallengeFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate({ to: '/challenges' })}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Challenges
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Challenge</h1>
            <p className="text-gray-600 mt-2">
              Set up a new challenge with rewards for your community
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the fundamental details about your challenge
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Challenge Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter challenge name..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe what participants need to do..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Schedule
                </CardTitle>
                <CardDescription>
                  Set when your challenge will be active
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Start Date & Time */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Start
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Time *</label>
                        <input
                          type="time"
                          required
                          value={formData.startTime}
                          onChange={(e) => handleInputChange('startTime', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* End Date & Time */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      End
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.endDate}
                          onChange={(e) => handleInputChange('endDate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Time *</label>
                        <input
                          type="time"
                          required
                          value={formData.endTime}
                          onChange={(e) => handleInputChange('endTime', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gift Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-pink-600" />
                  Gift Reward
                </CardTitle>
                <CardDescription>
                  Configure the reward that winners will receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gift Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.giftName}
                      onChange={(e) => handleInputChange('giftName', e.target.value)}
                      placeholder="e.g., Free Coffee Voucher"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gift Type *</label>
                    <select
                      required
                      value={formData.giftType}
                      onChange={(e) => handleInputChange('giftType', e.target.value as any)}
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
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Gift Description</label>
                  <textarea
                    rows={2}
                    value={formData.giftDescription}
                    onChange={(e) => handleInputChange('giftDescription', e.target.value)}
                    placeholder="Describe the gift reward..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">EUR €</label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={formData.giftValue}
                      onChange={(e) => handleInputChange('giftValue', parseFloat(e.target.value) || 0)}
                      placeholder="10.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Quantity *</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.giftQuantity}
                      onChange={(e) => handleInputChange('giftQuantity', parseInt(e.target.value) || 1)}
                      placeholder="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coin Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  Coin Requirements
                </CardTitle>
                <CardDescription>
                  Set the coin costs for challenge participation
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
                    placeholder="3"
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
                    placeholder="1"
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
                    placeholder="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Gift Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-pink-600" />
                  Gift Preview
                </CardTitle>
                <CardDescription>
                  Preview of the reward configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formData.giftName ? (
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-pink-100 rounded-lg">
                        <Gift className="h-6 w-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{formData.giftName}</h4>
                        <p className="text-sm text-gray-600 capitalize">{formData.giftType.toLowerCase()}</p>
                        {formData.giftDescription && (
                          <p className="text-sm text-gray-700 mt-1">{formData.giftDescription}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-green-600">
                            {formData.giftValue > 0 ? `${formData.giftValue} ${formData.giftCurrency}` : 'Free'}
                          </span>
                          <span className="text-sm text-gray-500">• Qty: {formData.giftQuantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <Gift className="h-12 w-12 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">Gift details will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={createChallengeMutation.isPending}
                    className="w-full"
                  >
                    {createChallengeMutation.isPending ? 'Creating...' : 'Create Challenge'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate({ to: '/challenges' })}
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
  )
}
