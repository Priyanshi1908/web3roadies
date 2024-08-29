import { useEffect, useState } from 'react';
import Link from 'next/link';

const BottomBar = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setIsClient(true);
    setCurrentPath(window.location.pathname); // Set current path when the component is mounted on the client
  }, []);

  const getIconColor = (path) => {
    return currentPath === path ? 'text-[#ffd700]' : 'text-white';
  };

  const getImageSrc = (path, activeSrc, inactiveSrc) => {
    return currentPath === path ? activeSrc : inactiveSrc;
  };

  // if (!isClient || theme !== 'light-theme') {
  //   return null; // Return null if not client or not light theme
  // }

  return (
    <div className="fixed bottom-0 w-full bg-custom-gradient3 shadow-lg border-t-2 border-black m-0 py-1">
      <div className="flex justify-around py-2">
        <Link href="/">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={getImageSrc('#', '/game2.png', '/game2.png')} // Ensure these paths point to your images
              alt="Game"
              className={`h-8 w-8 transition-transform duration-300 ${currentPath === '/game' ? 'scale-150' : ''}`}
            />
            <span className={`text-xs ${getIconColor('/game')}`}>Game</span>
          </div>
        </Link>

        <Link href="/leaderboard">
          <div className="flex flex-col items-center space-y-1">
            <img
              src={getImageSrc('#', '/leaderboard.png', '/leaderboard.png')} // Ensure these paths point to your images
              alt="Leaderboard"
              className={`h-8 w-8 transition-transform duration-300 mb-1 ${currentPath === '/leaderboard' ? 'scale-150' : ''}`}
            />
            <span className={`text-xs ${getIconColor('/leaderboard')}`}>Leaderboard</span>
          </div>
        </Link>

        <Link href="/earn">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={getImageSrc('#', '/earn1.png', '/earn1.png')} // Ensure these paths point to your images
              alt="Earnings"
              className={`h-8 w-8 transition-transform duration-300 ${currentPath === '/earn' ? 'scale-150' : ''}`}
            />
            <span className={`text-xs ${getIconColor('/earn')}`}>Earn</span>
          </div>
        </Link>

        <Link href="/profile">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={getImageSrc('#', '/profile.png', '/profile.png')} // Ensure these paths point to your images
              alt="Profile"
              className={`h-8 w-8 transition-transform duration-300 ${currentPath === '/profile' ? 'scale-150' : ''}`}
            />
            <span className={`text-xs ${getIconColor('/profile')}`}>Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
