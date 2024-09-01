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
    <Box
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
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
          height: '100%',
          alignItems: 'center',
          flexGrow: 1,
          minHeight: {
            xxs: '60vh',
            md: '66vh',
            lg: '68vh',
            // xl: '74vh',
            // xxl: '78vh',
          },
          marginTop: {
            xxs: 2,
            sm: 4,
          },
        }}
      >
        <CreateQR />
        <LoginForm />
      </Stack>
      <Box
        component="footer"
        sx={{
          mt: 'auto',
          width: '100%',
          position: 'absolute',
        }}
      >
        <FooterLogin />
      </Box>
    </Box>
  );
}

export default Login;
