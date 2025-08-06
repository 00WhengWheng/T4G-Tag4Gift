import { createFileRoute } from '@tanstack/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, AvatarFallback, AvatarImage } from '@t4g/ui-web';
import { Card, CardContent, CardHeader, CardTitle } from '@t4g/ui-web';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';

export const Route = createFileRoute('/profile')({
  component: () => (
    <AuthenticatedLayout>
      <ProfileComponent />
    </AuthenticatedLayout>
  ),
});

function ProfileComponent() {
  const { user } = useAuth0();

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <Card className="max-w-2xl">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.picture} alt={user.name} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Business Details</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p>
                <span className="font-medium">Business Name:</span>{' '}
                {user['https://t4g.space/business_profile']?.businessName || 'N/A'}
              </p>
              <p>
                <span className="font-medium">Business Type:</span>{' '}
                {user['https://t4g.space/business_profile']?.businessType || 'N/A'}
              </p>
              <p>
                <span className="font-medium">Subscription:</span>{' '}
                <span className="capitalize bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {user['https://t4g.space/business_profile']?.subscription || 'free'}
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
