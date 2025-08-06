import { createFileRoute } from '@tanstack/react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/callback')({
  component: CallbackComponent,
})

function CallbackComponent() {
  const { error, isLoading } = useAuth0()
  
  // Log auth state for debugging
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const state = urlParams.get('state')
    const code = urlParams.get('code')
    const error = urlParams.get('error')
    
    console.log('Callback URL params:', { state, code, error })
    console.log('Current auth state:', { error, isLoading })
    
    // Check stored state
    const storedKeys = Object.keys(localStorage).filter(key => 
      key.includes('auth0') || key.includes('@@auth0spajs@@')
    )
    console.log('Auth0 localStorage keys:', storedKeys)
  }, [error, isLoading])
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  useEffect(() => {
    const info = [
      `Loading: ${isLoading}`,
      `Authenticated: ${isAuthenticated}`,
      `Error: ${error?.message || 'none'}`,
      `User: ${user?.email || 'none'}`,
      `URL: ${window.location.href}`,
    ]
    setDebugInfo(info)
    console.log('Auth callback state:', { isLoading, isAuthenticated, error, user })
    
    // If authentication is complete, redirect to home
    if (!isLoading) {
      if (isAuthenticated && !error) {
        console.log('✅ Auth callback successful, redirecting...')
        setTimeout(() => {
          window.location.replace('/')
        }, 2000) // Increased delay to ensure state is fully processed
      } else if (!isAuthenticated && !error) {
        console.log('❌ Auth callback completed but not authenticated, redirecting to login...')
        setTimeout(() => {
          window.location.replace('/')
        }, 2000)
      } else if (error) {
        console.error('❌ Auth callback error:', error)
        // Don't auto-redirect on error, let user see the error
      }
    }
  }, [isLoading, isAuthenticated, error, user])

  // Clear localStorage auth state on error to prevent persistent issues
  useEffect(() => {
    if (error && error.message?.includes('Invalid state')) {
      console.log('🧹 Clearing auth state due to invalid state error')
      localStorage.removeItem('@@auth0spajs@@')
      localStorage.removeItem('auth_token')
    }
  }, [error])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8 max-w-md mx-auto">
          <div className="text-6xl mb-6">⚠️</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Authentication Error
          </h1>
          <p className="text-muted-foreground mb-6">
            {error.message || 'Authentication failed. Please try again.'}
          </p>
          <div className="space-y-3">
            <a
              href="/"
              className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Home
            </a>
            {error.message?.includes('Invalid state') && (
              <button
                onClick={() => {
                  localStorage.removeItem('@@auth0spajs@@')
                  localStorage.removeItem('auth_token')
                  localStorage.clear()
                  window.location.href = '/'
                }}
                className="block w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear Auth State & Retry
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground mb-4">
          {isLoading ? 'Completing authentication...' : 'Redirecting...'}
        </p>
        <div className="text-sm text-gray-500 mt-4">
          <div className="max-w-md mx-auto">
            {debugInfo.map((info, i) => (
              <div key={i} className="mb-1">{info}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
