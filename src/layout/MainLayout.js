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
    <Container component="div">
      <Box component="header" sx={{ justifyContent: 'space-between' }}>
        {/* <h1>Layout</h1> */}
        <Box component="div">
          {auth.session}
          {auth.session && (
            <Button style={{ marginLeft: 12 }} onClick={logout}>
              Logout
            </Button>
          )}
        </Box>
      </Box>

      {children}
    </Container>
  );
}

export default MainLayout;
