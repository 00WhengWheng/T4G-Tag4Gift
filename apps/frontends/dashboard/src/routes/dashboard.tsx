import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';

// This is a placeholder dashboard route - individual pages are accessed directly
export const Route = createFileRoute('/dashboard')({
  component: () => (
    <AuthenticatedLayout>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the T4G Business Dashboard. Use the sidebar to navigate to different sections.
        </p>
      </div>
    </AuthenticatedLayout>
  ),
});
