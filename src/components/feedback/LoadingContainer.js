'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '~/contexts/hooks';
import LoadingWithLogo from './loading/LoadingWithLogo';

const LoadingContainer = () => {
  const { setLoading } = useAppContext();
  const pathname = usePathname();
  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    // If REF has been changed, do the stuff
    setLoading(true);
    if (savedPathNameRef.current !== pathname) {
      savedPathNameRef.current = pathname;
      setLoading(false);
    }
  }, [pathname]);

  return <LoadingWithLogo />;
};

export default LoadingContainer;
