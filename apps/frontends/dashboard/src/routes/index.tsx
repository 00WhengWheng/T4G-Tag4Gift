import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { DashboardHome } from '../pages/DashboardHome';

export const Route = createFileRoute('/')({
  component: () => (
    <AuthenticatedLayout>
      <DashboardHome />
    </AuthenticatedLayout>
  ),
});
