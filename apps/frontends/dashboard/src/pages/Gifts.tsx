import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Plus, 
  Search, 
  Filter, 
  Gift, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  DollarSign,
  Calendar,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@t4g/ui-web';
import { Button } from '@t4g/ui-web';

interface Gift {
  id: string;
  identity: string;
  name: string;
  description: string;
  type: 'PHYSICAL' | 'DIGITAL' | 'DISCOUNT' | 'EXPERIENCE';
  value: number;
  currency: string;
  totalQuantity: number;
  remainingQuantity: number;
  isActive: boolean;
  venue?: {
    id: string;
    name: string;
  };
  createdAt: string;
  challenge?: {
    id: string;
    name: string;
  };
}

export function GiftsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  // Mock data - replace with actual tRPC query
  const gifts: Gift[] = [
    {
      id: '1',
      identity: 'GIFT001',
      name: 'Free Coffee',
      description: 'A complimentary coffee of your choice',
      type: 'PHYSICAL',
      value: 5.99,
      currency: 'EUR',
      totalQuantity: 100,
      remainingQuantity: 78,
      isActive: true,
      venue: { id: 'v1', name: 'Downtown Coffee Shop' },
      createdAt: '2024-01-15T10:00:00Z',
      challenge: { id: 'c1', name: 'Morning Quiz Challenge' },
    },
    {
      id: '2',
      identity: 'GIFT002',
      name: '20% Discount',
      description: '20% off your next purchase',
      type: 'DISCOUNT',
      value: 20,
      currency: 'EUR',
      totalQuantity: 50,
      remainingQuantity: 50,
      isActive: true,
      venue: { id: 'v2', name: 'Fashion Store' },
      createdAt: '2024-01-20T14:30:00Z',
    },
    {
      id: '3',
      identity: 'GIFT003',
      name: 'Digital Wallpaper Pack',
      description: 'Premium digital wallpapers collection',
      type: 'DIGITAL',
      value: 9.99,
      currency: 'EUR',
      totalQuantity: 1000,
      remainingQuantity: 892,
      isActive: true,
      createdAt: '2024-01-25T09:15:00Z',
      challenge: { id: 'c2', name: 'Photo Contest' },
    },
  ];

  const filteredGifts = gifts.filter(gift => {
    const matchesSearch = gift.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gift.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || gift.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type: Gift['type']) => {
    switch (type) {
      case 'PHYSICAL': return 'bg-blue-100 text-blue-800';
      case 'DIGITAL': return 'bg-purple-100 text-purple-800';
      case 'DISCOUNT': return 'bg-green-100 text-green-800';
      case 'EXPERIENCE': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: Gift['type']) => {
    switch (type) {
      case 'PHYSICAL': return Package;
      case 'DIGITAL': return Gift;
      case 'DISCOUNT': return DollarSign;
      case 'EXPERIENCE': return Calendar;
      default: return Gift;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gift Management</h1>
          <p className="text-muted-foreground">
            Create and manage gifts for your challenges and campaigns.
          </p>
        </div>
        <Button asChild>
          <Link to="/gifts/new">
            <Plus className="h-4 w-4 mr-2" />
            Create Gift
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gifts</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{gifts.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Gifts</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {gifts.filter(g => g.isActive).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Ready to be claimed
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €{gifts.reduce((sum, gift) => sum + gift.value * gift.totalQuantity, 0).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all gifts
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {gifts.reduce((sum, gift) => sum + gift.remainingQuantity, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Available for claiming
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search gifts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background"
        >
          <option value="all">All Types</option>
          <option value="PHYSICAL">Physical</option>
          <option value="DIGITAL">Digital</option>
          <option value="DISCOUNT">Discount</option>
          <option value="EXPERIENCE">Experience</option>
        </select>
      </div>

      {/* Gifts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGifts.map((gift) => {
          const TypeIcon = getTypeIcon(gift.type);
          return (
            <Card key={gift.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TypeIcon className="h-5 w-5 text-muted-foreground" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(gift.type)}`}>
                      {gift.type}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/gifts/${gift.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/gifts/${gift.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{gift.name}</CardTitle>
                <CardDescription>{gift.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Value</span>
                  <span className="font-semibold">
                    {gift.type === 'DISCOUNT' ? `${gift.value}%` : `€${gift.value}`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <span className="font-semibold">
                    {gift.remainingQuantity}/{gift.totalQuantity}
                  </span>
                </div>
                
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ 
                      width: `${(gift.remainingQuantity / gift.totalQuantity) * 100}%` 
                    }}
                  ></div>
                </div>

                {gift.venue && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{gift.venue.name}</span>
                  </div>
                )}

                {gift.challenge && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Used in: {gift.challenge.name}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    gift.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {gift.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <Button size="sm" asChild>
                    <Link to={`/challenges/new?giftId=${gift.id}`}>
                      Add to Challenge
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredGifts.length === 0 && (
        <div className="text-center py-12">
          <Gift className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No gifts found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || filterType !== 'all' 
              ? 'Try adjusting your search or filter criteria.' 
              : 'Get started by creating your first gift.'}
          </p>
          <Button asChild>
            <Link to="/gifts/new">Create Your First Gift</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
