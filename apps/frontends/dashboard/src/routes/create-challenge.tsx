import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Calendar, Coins } from 'lucide-react'
import { trpc } from '../utils/trpc'

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
}

function CreateChallengePage() {
  const navigate = useNavigate()
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
    e.preventDefault()
    
    // Process form data with tRPC
    const challengeData = {
      name: formData.name,
      description: formData.description,
      startDateTime: `${formData.startDate}T${formData.startTime}`,
      endDateTime: `${formData.endDate}T${formData.endTime}`,
      entryCost: {
        scanCoins: formData.scanCoins,
        shareCoins: formData.shareCoins,
        gameCoins: formData.gameCoins,
      }
    }
    
    console.log('Creating challenge:', challengeData)
    createChallengeMutation.mutate(challengeData)
  }

  const handleInputChange = (field: keyof ChallengeFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          className="btn btn-outline btn-sm"
          onClick={() => navigate({ to: '/challenges' })}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Challenges
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Create New Challenge</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Basic Information</h2>
              </div>
              <div className="card-content space-y-4">
                <div>
                  <label>Challenge Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter challenge name..."
                  />
                </div>
                
                <div>
                  <label>Description *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Describe what participants need to do..."
                  />
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule
                </h2>
              </div>
              <div className="card-content">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Start Date & Time */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">Start</h4>
                    <div>
                      <label>Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Time *</label>
                      <input
                        type="time"
                        required
                        value={formData.startTime}
                        onChange={(e) => handleInputChange('startTime', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* End Date & Time */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-700">End</h4>
                    <div>
                      <label>Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Time *</label>
                      <input
                        type="time"
                        required
                        value={formData.endTime}
                        onChange={(e) => handleInputChange('endTime', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coin Requirements */}
            <div className="card">
              <div className="card-header">
                <h2 className="card-title flex items-center gap-2">
                  <Coins className="h-5 w-5 text-yellow-600" />
                  Coin Requirements
                </h2>
              </div>
              <div className="card-content space-y-4">
                {/* Scan Coins */}
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">S</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Scan Coins</div>
                      <div className="text-sm text-gray-600">QR/NFC scanning</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    {formData.scanCoins}
                  </div>
                </div>

                {/* Share Coins */}
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">H</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Share Coins</div>
                      <div className="text-sm text-gray-600">Social media posts</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-green-600">
                    {formData.shareCoins}
                  </div>
                </div>

                {/* Game Coins */}
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">G</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Game Coins</div>
                      <div className="text-sm text-gray-600">Playing games</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-purple-600">
                    {formData.gameCoins}
                  </div>
                </div>

                <div className="text-sm text-gray-500 text-center pt-2 border-t">
                  Default coin requirements for participation
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="card">
              <div className="card-content pt-6">
                <div className="space-y-3">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={createChallengeMutation.isPending}
                  >
                    {createChallengeMutation.isPending ? 'Creating...' : 'Create Challenge'}
                  </button>
                  
                  <button 
                    type="button"
                    className="btn btn-outline w-full"
                    onClick={() => navigate({ to: '/challenges' })}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export const Route = createFileRoute('/create-challenge')({
  component: CreateChallengePage,
})
