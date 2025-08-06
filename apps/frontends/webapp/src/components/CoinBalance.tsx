import React from 'react';
import { trpc } from '../utils/trpc';
import { useAuth0 } from '@auth0/auth0-react';

export function CoinBalance() {
  const { user } = useAuth0();
  
  // Get user's coin balance
  const { data: balance, isLoading } = trpc.coins.getBalance.useQuery(
    { userId: user?.sub || '' },
    { 
      enabled: !!user?.sub,
      refetchOnWindowFocus: false,
    }
  );

  // Get weekly progress towards challenge pass
  const { data: weeklyProgress } = trpc.coins.checkWeeklyProgress.useQuery(
    { userId: user?.sub || '' },
    { 
      enabled: !!user?.sub,
      refetchOnWindowFocus: false,
    }
  );

  // Get weekly requirements
  const { data: requirements } = trpc.coins.getWeeklyRequirements.useQuery();

  if (!user || isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
        <div className="animate-pulse">
          <div className="h-6 bg-white/20 rounded mb-2"></div>
          <div className="h-4 bg-white/20 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  const progressPercentage = weeklyProgress && requirements ? 
    Math.min(
      100,
      ((Math.min(weeklyProgress.tagCoins, requirements.tagCoins) / requirements.tagCoins) * 100 +
       (Math.min(weeklyProgress.shareCoins, requirements.shareCoins) / requirements.shareCoins) * 100 +
       (Math.min(weeklyProgress.gameCoins, requirements.gameCoins) / requirements.gameCoins) * 100) / 3
    ) : 0;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <h3 className="text-white font-bold text-lg mb-4 flex items-center">
        <span className="text-yellow-400 mr-2">🪙</span>
        Your Coins
      </h3>
      
      {balance && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{balance.tagCoins}</div>
            <div className="text-sm text-gray-300">Tag Coins</div>
            <div className="text-xs text-gray-400">Scan QR codes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{balance.shareCoins}</div>
            <div className="text-sm text-gray-300">Share Coins</div>
            <div className="text-xs text-gray-400">Social shares</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{balance.gameCoins}</div>
            <div className="text-sm text-gray-300">Game Coins</div>
            <div className="text-xs text-gray-400">Play games</div>
          </div>
        </div>
      )}

      {/* Weekly Challenge Pass Progress */}
      {weeklyProgress && requirements && (
        <div className="border-t border-white/20 pt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-white font-medium">Weekly Challenge Pass</h4>
            <span className="text-sm text-gray-300">{Math.round(progressPercentage)}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <span className={weeklyProgress.tagCoins >= requirements.tagCoins ? 'text-green-400' : 'text-gray-400'}>
                {weeklyProgress.tagCoins}/{requirements.tagCoins} Tags
              </span>
            </div>
            <div className="text-center">
              <span className={weeklyProgress.shareCoins >= requirements.shareCoins ? 'text-green-400' : 'text-gray-400'}>
                {weeklyProgress.shareCoins}/{requirements.shareCoins} Shares
              </span>
            </div>
            <div className="text-center">
              <span className={weeklyProgress.gameCoins >= requirements.gameCoins ? 'text-green-400' : 'text-gray-400'}>
                {weeklyProgress.gameCoins}/{requirements.gameCoins} Games
              </span>
            </div>
          </div>

          {weeklyProgress.canGeneratePass && (
            <button 
              className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors"
              onClick={() => {
                // TODO: Implement challenge pass generation
                alert('Challenge pass generation coming soon!');
              }}
            >
              🎫 Generate Challenge Pass
            </button>
          )}

          {weeklyProgress.hasRequiredCoins && !weeklyProgress.canGeneratePass && (
            <div className="w-full mt-4 bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-lg text-center">
              Challenge pass already generated this week
            </div>
          )}
        </div>
      )}
    </div>
  );
}
