'use client';

import { useAuthContext } from '~/contexts/AuthContext';
import DashboardHeader from './dashboard/header';

function MainLayout({ children }) {
  const { session, clear } = useAuthContext();

  const logout = () => {
    clear();
  };

  return (
    <>
      {session && <DashboardHeader />}
      {children}
    </>
  );
}

export default MainLayout;
