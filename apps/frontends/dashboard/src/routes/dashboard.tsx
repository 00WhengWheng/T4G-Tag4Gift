import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';

export const Route = createFileRoute('/_dashboard')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: DashboardLayoutComponent,
});

function DashboardLayoutComponent() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
