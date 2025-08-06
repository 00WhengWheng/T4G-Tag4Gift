import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { AnalyticsPage } from '../pages/AnalyticsPage';

export const Route = createFileRoute('/analytics')({
  component: () => (
    <AuthenticatedLayout>
      <AnalyticsPage />
    </AuthenticatedLayout>
  ),
});
