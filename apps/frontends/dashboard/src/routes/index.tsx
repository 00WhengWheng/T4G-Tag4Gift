import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@t4g/ui-web';
import { BarChart, Gift, Map } from 'lucide-react';

export const Route = createFileRoute('/_dashboard/')({
  component: DashboardIndex,
});

function DashboardIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Business Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Map className="mr-2" /> Venues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Active Venues</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="mr-2" /> Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Live Challenges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="mr-2" /> Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
            <p className="text-sm text-muted-foreground">Tags this month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
