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
      <Box
        component="div"
        style={{
          justifyContent: 'space-between',
        }}
      >
        <h1>Layout</h1>
        <div>
          {auth.session}
          {auth.session && (
            <Button style={{ marginLeft: 12 }} onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </Box>

      {children}
    </Container>
  );
}

export default MainLayout;
