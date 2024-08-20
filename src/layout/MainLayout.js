'use client';

import { Box, Button, Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useAuthContext } from '~/contexts/AuthContext';

function MainLayout({ children }) {
  const t = useTranslations();
  const { auth, clear } = useAuthContext();

  const logout = () => {
    clear();
  };

  return (
    <>
      <div>
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
    </>
  );
}

export default MainLayout;
