import { useT4GAuth } from '@/hooks/useT4GAuth';
import { T4GPlatform } from '@/utils/auth0';

interface PlatformSwitcherProps {
  className?: string;
  showFullLabel?: boolean;
}

export function PlatformSwitcher({ className, showFullLabel = true }: PlatformSwitcherProps) {
  const { platform, switchPlatform, user, isAuthenticated } = useT4GAuth();

  if (!isAuthenticated || !user) {
    return null;
  }

  const platformConfig = {
    users: {
      label: 'T4G Users',
      description: 'Games & Challenges',
      emoji: '🎮',
      color: 'text-blue-600',
      domain: 't4g.fun'
    },
    business: {
      label: 'T4G Business', 
      description: 'Dashboard & Analytics',
      emoji: '🏢',
      color: 'text-green-600',
      domain: 't4g.space'
    }
  };

  const currentPlatform = platformConfig[platform];
  const otherPlatform = platform === 'users' ? 'business' : 'users';
  const otherPlatformConfig = platformConfig[otherPlatform];

  const handlePlatformSwitch = async (newPlatform: T4GPlatform) => {
    if (newPlatform === platform) return;
    
    try {
      await switchPlatform(newPlatform);
    } catch (error) {
      console.error('Platform switch failed:', error);
    }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <details className="group">
        <summary className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <span className="text-lg">{currentPlatform.emoji}</span>
          {showFullLabel && (
            <>
              <span className="hidden sm:inline">{currentPlatform.label}</span>
              <span className={`hidden md:inline text-xs px-2 py-1 rounded-full bg-gray-100 ${currentPlatform.color}`}>
                {currentPlatform.domain}
              </span>
            </>
          )}
          <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <span>{currentPlatform.emoji}</span>
              Current Platform
            </div>
          </div>
          
          <div className="p-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
              <div>
                <div className="font-medium text-sm">{currentPlatform.label}</div>
                <div className="text-xs text-gray-500">{currentPlatform.description}</div>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                Active
              </span>
            </div>
          </div>
          
          <div className="border-t border-gray-100 p-3">
            <div className="text-sm font-medium text-gray-600 mb-2">Switch Platform</div>
            
            <button
              onClick={() => handlePlatformSwitch(otherPlatform)}
              className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{otherPlatformConfig.emoji}</span>
                <div>
                  <div className="font-medium text-sm">{otherPlatformConfig.label}</div>
                  <div className="text-xs text-gray-500">{otherPlatformConfig.description}</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
          
          <div className="border-t border-gray-100 p-3">
            <div className="text-xs text-gray-500 flex items-center justify-between">
              <span>User: {user.email}</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                {platform === 'users' ? 'Player' : 'Business'}
              </span>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

// Compact version for mobile/small spaces
export function CompactPlatformSwitcher({ className }: { className?: string }) {
  return <PlatformSwitcher className={className} showFullLabel={false} />;
}
