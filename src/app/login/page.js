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
            xs: '0 24px',
            sm: '0 32px',
            md: '0 40px',
          },
          gap: {
            xxs: 2,
            xs: 4,
            lg: 6,
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
            xxs: '54vh',
            md: '68vh',
            lg: '64vh',
            xl: '68vh',
            xxl: '76vh',
          },
        }}
      >
        <CreateQR />
        <LoginForm />
      </Stack>
      <Box
        component="footer"
        sx={{
          mt: {
            xxs: 'auto',
          },
        }}
      >
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
