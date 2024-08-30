'use client';

import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import { useAppDispatch } from '~/redux/hook';
import { setQr } from '~/redux/slices/qrSlice';
import CreateQR from '~/sections/login/CreateQR';
import { generateQrValue } from '~/utils/aesConvert';

function Login() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const qrValue = generateQrValue();
    dispatch(setQr(qrValue));
  }, []);

  return (
    <Stack sx={{ minHeight: 1 }}>
      <Box component="nav">
        <Navbar />
      </Box>
      <Stack
        component="main"
        sx={{
          p: {
            xxs: '0 16px',
            xs: '0 32px',
            sm: '0 48px',
            md: '0 64px',
          },
          gap: {
            xxs: 2,
            xs: 4,
            lg: 8,
          },
          flexDirection: {
            xxs: 'column-reverse',
            md: 'row',
          },
          justifyContent: {
            xxs: 'center',
            md: 'flex-end',
            lg: 'center',
          },
          alignItems: 'center',
          minHeight: {
            xxs: '56vh',
            md: '62vh',
            lg: '64vh',
            lgp: '70vh',
            xl: '72vh',
          },
        }}
      >
        <CreateQR />
        <LoginForm />
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        component="footer"
        sx={{
          mt: {
            xxs: 'auto',
            md: '3rem',
          },
        }}
      >
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
