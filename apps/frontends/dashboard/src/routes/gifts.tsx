import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { GiftsPage } from '../pages/GiftsPage';

export const Route = createFileRoute('/gifts')({
  component: () => (
    <AuthenticatedLayout>
      <GiftsPage />
    </AuthenticatedLayout>
  ),
});
