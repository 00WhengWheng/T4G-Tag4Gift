import { createFileRoute } from '@tanstack/react-router'
import MapModal from '../components/MapView'

export const Route = createFileRoute('/map')({
  component: MapModal,
})
