'use client';

import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/login/NavbarLogin';
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
        display: 'flex',
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
            xs: '16px',
            sm: '32px',
            md: '40px',
          },
          gap: {
            xs: 2,
            lg: 6,
          },
          flexDirection: {
            xs: 'column-reverse',
            md: 'row',
          },
          justifyContent: {
            xs: 'center',
            md: 'flex-end',
            lg: 'center',
          },
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <CreateQR />
        <LoginForm />
        {/* <FloatingActionButton /> */}
      </Stack>
      <Box
        component="footer"
        sx={{
          width: '100%',
          mt: 'auto',
        }}
      >
        <FooterLogin />
      </Box>
    </Box>
  );
}

export default Login;
