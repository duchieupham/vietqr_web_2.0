'use client';

import { Box, Stack } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import useDisplay from '~/hooks/useDisplay';

function Login() {
  const { height, orientation, width } = useDisplay();

  return (
    <Stack sx={{ minHeight: 1 }}>
      <Box
        component="nav"
        sx={{
          height: '100%',
        }}
      >
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{
          display: 'flex',
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <LoginForm />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        component="footer"
        sx={{
          height: '100%',
        }}
      >
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
