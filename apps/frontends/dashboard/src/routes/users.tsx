import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { UsersPage } from '../pages/UsersPage';

export const Route = createFileRoute('/users')({
  component: () => (
    <AuthenticatedLayout>
      <UsersPage />
    </AuthenticatedLayout>
  ),
});
