import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: ProfileComponent,
});

function ProfileComponent() {
  const { user } = Route.useRouteContext().auth;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
