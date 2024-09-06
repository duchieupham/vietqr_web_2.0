'use client';

import { Button, Stack, Typography } from '@mui/material';
import { useAuthContext } from '~/contexts/AuthContext';

function MainLayout({ children }) {
  const { session, clear } = useAuthContext();

  console.log(session);

  const logout = () => {
    clear();
  };

  return (
    <>
      {session && (
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Typography>{`${session?.lastName} ${session?.firstName}`}</Typography>

          <div style={{ padding: '0 8px' }}> |</div>
          <Button onClick={logout} variant="text">
            Logout
          </Button>
        </Stack>
      )}

      {children}
    </>
  );
}

export default MainLayout;
