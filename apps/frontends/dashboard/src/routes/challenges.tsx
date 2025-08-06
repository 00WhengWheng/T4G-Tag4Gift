import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { ChallengesPage } from '../pages/ChallengesPage';

export const Route = createFileRoute('/challenges')({
  component: () => (
    <AuthenticatedLayout>
      <ChallengesPage />
    </AuthenticatedLayout>
  ),
});
