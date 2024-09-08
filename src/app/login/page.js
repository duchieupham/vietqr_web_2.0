'use client';

import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import Footer from '~/components/footer/login';
import LoginForm from '~/components/form/login/LoginForm';
import Navbar from '~/components/navbar/login';
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
        <Footer />
      </Box>
    </Box>
  );
}

export default Login;
