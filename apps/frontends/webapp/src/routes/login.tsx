import { createFileRoute, redirect } from '@tanstack/react-router';
import { LoginPage } from '../pages/LoginPage';

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
  return <LoginPage onLogin={login} />;
}