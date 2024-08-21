import { useState, useEffect } from 'react';

// Custom Hook to get display properties
function useDisplay() {
  const [displayInfo, setDisplayInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.screen.orientation.type,
  });

  useEffect(() => {
    const handleResize = () => {
      setDisplayInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.screen.orientation.type,
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return displayInfo;
}

export default useDisplay;
