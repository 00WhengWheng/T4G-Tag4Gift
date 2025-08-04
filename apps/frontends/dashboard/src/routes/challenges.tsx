import { createFileRoute } from '@tanstack/react-router';
import { ChallengesPage } from '../pages/ChallengesPage';

export const Route = createFileRoute('/challenges')({
  component: ChallengesPage,
});
