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
        height: '100%',
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
            xxs: '16px 16px',
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
        }}
      >
        <CreateQR />
        <LoginForm />
      </Stack>
      <Box
        component="footer"
        sx={{
          width: '100%',
          position: {
            xxs: 'relative',
            md: 'absolute',
          },
          bottom: 0,
          mt: {
            xxs: '25%',
            md: 'auto',
          },
        }}
      >
        <FooterLogin />
      </Box>
    </Box>
  );
}

export default Login;
