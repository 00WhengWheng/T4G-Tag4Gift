import { createFileRoute } from '@tanstack/react-router'
import MapModal from '../pages/MapModal'

export const Route = createFileRoute('/map')({
  component: MapModal,
})
