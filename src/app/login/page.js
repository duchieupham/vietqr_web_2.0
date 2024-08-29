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
              xxs: '0 16px',
              xs: '0 32px',
              md: '0 64px',
              lg: '56px',
            },
            gap: {
              xxs: 2,
              xs: 4,
              lg: 8,
            },
            flexDirection: {
              xxs: 'column-reverse',
              xs: 'column-reverse',
              md: 'row',
              lg: 'row',
            },
            justifyContent: {
              xxs: 'center',
              xs: 'center',
              md: 'flex-end',
              lg: 'center',
              xl: 'center',
            },
            alignItems: 'center',
            minHeight: {
              xxs: '50vh',
              xs: '50vh',
              sm: '45vh',
              md: '37vh',
              lg: '74vh',
              lgp: '58vh',
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
              xxs: 'auto',
              xs: 'auto',
              md: 'auto',
              lg: '0',
              xl: '3%',
            },
            position: {
              xs: 'relative',
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
