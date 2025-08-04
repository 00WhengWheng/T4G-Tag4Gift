import { createFileRoute } from '@tanstack/react-router'
import Claim from '../pages/Claim'

export const Route = createFileRoute('/claim/$id')({
  component: () => {
    const { id } = Route.useParams()
    return <Claim claimId={id} />
  },
})
