import { RouterProvider } from '@tanstack/react-router';
import { router } from './main'; // import the router instance

export default function App() {
  return <RouterProvider router={router} />;
}
