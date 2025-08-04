import { createFileRoute } from '@tanstack/react-router'
import GamesPage from '../pages/GamesPage'

export const Route = createFileRoute('/games')({
  component: GamesPage,
})
