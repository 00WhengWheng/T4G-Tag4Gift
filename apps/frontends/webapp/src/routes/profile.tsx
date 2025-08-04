import { createFileRoute, redirect } from '@tanstack/react-router'
import Profile from '../pages/Profile'

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context, location }) => {
    // Check if user is authenticated
    if (!context.auth.isAuthenticated) {
      // Redirect to home with redirect parameter for post-login navigation
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: Profile,
})
