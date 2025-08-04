import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface ClaimProps {
  claimId: string;
}

export default function Claim({ claimId }: ClaimProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-game-primary-300">Claim Your Prize!</h1>
        <p className="text-game-primary-200">Claim ID: {claimId}</p>
      </div>

      <Card className="bg-black/40 border-game-primary-600">
        <CardHeader>
          <CardTitle className="text-game-primary-300">🍕 Free Large Pizza</CardTitle>
          <CardDescription className="text-game-primary-200">
            Congratulations! You won the "Free Pizza Friday" challenge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-green-600/20 border border-green-600 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Prize Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-game-primary-200">Prize</span>
                <span className="text-game-primary-300">Large Pizza (Any Toppings)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-game-primary-200">Venue</span>
                <span className="text-game-primary-300">Pizza Palace</span>
              </div>
              <div className="flex justify-between">
                <span className="text-game-primary-200">Valid Until</span>
                <span className="text-game-primary-300">Dec 31, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-game-primary-200">Status</span>
                <Badge className="bg-green-600">Ready to Claim</Badge>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-600/20 border border-blue-600 rounded">
            <h3 className="font-semibold text-blue-300 mb-2">How to Claim</h3>
            <ol className="text-sm text-game-primary-200 space-y-1 list-decimal list-inside">
              <li>Show this screen to venue staff</li>
              <li>Staff will verify your claim code</li>
              <li>Enjoy your free pizza!</li>
            </ol>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-lg">
            <p className="text-xs text-game-primary-200 mb-2">Claim Code</p>
            <p className="text-2xl font-mono font-bold text-game-primary-300 tracking-widest">
              P1ZZ4-{claimId?.slice(-4)?.toUpperCase()}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button className="flex-1 bg-gradient-to-r from-green-600 to-green-700">
          Mark as Used
        </Button>
        <Button variant="outline" className="flex-1 border-game-primary-600 text-game-primary-300">
          Share Achievement
        </Button>
      </div>
    </div>
  );
}
