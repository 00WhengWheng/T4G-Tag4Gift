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
        // Use TanStack Router navigation to dashboard home
        navigate({ to: '/' })
      } catch (err) {
        console.error('Auth callback error:', err)
        navigate({ to: '/' })
      }
    }
    
    handleCallback()
  }, [handleRedirectCallback, navigate])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Authentication Error</h1>
          <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
          <button 
            onClick={() => navigate({ to: '/' })}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">Completing login...</p>
        <p className="text-sm text-muted-foreground">You will be redirected to the dashboard.</p>
      </div>
    </div>
  )
}
