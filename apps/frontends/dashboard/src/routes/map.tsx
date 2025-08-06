import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { MapPage } from '../pages/MapPage';

export const Route = createFileRoute('/map')({
  component: () => (
    <AuthenticatedLayout>
      <MapPage />
    </AuthenticatedLayout>
  ),
});
