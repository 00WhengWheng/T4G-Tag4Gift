import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export const Route = createFileRoute('/callback')({
  component: AuthCallbackPage,
})

function AuthCallbackPage() {
  const { handleRedirectCallback, isLoading, error } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await handleRedirectCallback()
        // Use TanStack Router navigation
        navigate({ to: '/' })
      } catch (err) {
        console.error('Callback error:', err)
        navigate({ to: '/' })
      }
    }
    
    handleCallback()
  }, [handleRedirectCallback, navigate])

  // Remove the second useEffect to avoid conflicts
  // useEffect(() => {
  //   if (isAuthenticated && !isLoading && !hasHandledCallback) {
  //     window.location.href = '/'
  //   }
  // }, [isAuthenticated, isLoading, hasHandledCallback])

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
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Go Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">
          {isLoading ? 'Completing authentication...' : 'Redirecting...'}
        </p>
      </div>
    </div>
  )
}
