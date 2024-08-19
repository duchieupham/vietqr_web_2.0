'use client';

import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useAuthContext } from '~/contexts/AuthContext';

function MainLayout({ children }) {
  const t = useTranslations();
  const { auth, clear } = useAuthContext();

  const logout = () => {
    clear();
  };

  return (
    <div>
      <div style={{ justifyContent: 'space-between' }}>
        <h1>Admin Layout</h1>
        <div>
          {auth.session}
          {auth.session && (
            <Button style={{ marginLeft: 12 }} onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

export default MainLayout;
