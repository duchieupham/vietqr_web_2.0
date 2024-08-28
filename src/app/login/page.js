'use client';

import { Box, Stack } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import CreateQR from '~/sections/login/CreateQR';
import { generateQrValue } from '~/utils/aesConvert';

function Login() {
  const encryptedQrValue = generateQrValue();
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Stack height="100%">
        <Box component="nav">
          <Navbar />
        </Box>
        <Stack
          component="main"
          sx={{
            p: {
              xs: '0 32px',
              md: '0 64px',
              lg: '56px',
            },
            gap: {
              xs: 4,
              lg: 8,
            },
            flexDirection: {
              xs: 'column-reverse',
              lg: 'row',
            },
            justifyContent: {
              xs: 'center',
              md: 'flex-end',
              lg: 'center',
              xl: 'center',
            },
            alignItems: 'center',
            minHeight: {
              xs: '50vh',
              md: '66vh',
            },
          }}
        >
          <CreateQR encryptedQrValue={encryptedQrValue} />
          <LoginForm encryptedQrValue={encryptedQrValue} />
        </Stack>

        <Box
          component="footer"
          sx={{
            mt: {
              xs: 'auto',
              md: 'auto',
              lg: '0',
            },
          }}
        >
          <FooterLogin />
        </Box>
      </Stack>
    </Box>
  );
}

export default Login;
