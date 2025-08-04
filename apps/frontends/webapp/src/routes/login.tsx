import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  const { login } = Route.useRouteContext().auth;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Tag4Gift</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Please log in to continue
        </p>
        <button
          onClick={() => login()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
      </div>
    </div>
  );
}