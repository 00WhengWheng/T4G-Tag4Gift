import { createFileRoute } from '@tanstack/react-router'
import { CreateChallengeForm } from '../components/CreateChallengeForm'

function CreateChallengePage() {
  return <CreateChallengeForm />
}

export const Route = createFileRoute('/create-challenge')({
  component: CreateChallengePage,
})
