'use client';

import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
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
            xxs: '100%',
            xs: '50vh',
            sm: '45vh',
            md: '50vh',
            lg: '60vh',
            lgp: '74vh',
            xl: '74vh',
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
            xs: 'auto',
            md: 'auto',
            lg: 'auto',
          },
        }}
      >
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
