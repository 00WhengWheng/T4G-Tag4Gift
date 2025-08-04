import { createFileRoute } from '@tanstack/react-router'
import VenueHome from '../pages/VenueHome'

export const Route = createFileRoute('/venue/$id')({
  component: ({ params }) => <VenueHome venueId={params.id} />,
})
