'use client';

import { Box, Stack } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setQr } from '~/redux/slices/qrSlice';
import CreateQR from '~/sections/login/CreateQR';
import { generateQrValue } from '~/utils/aesConvert';

function Login() {
  const dispatch = useAppDispatch();
  // const { qr } = useAppSelector((store) => store.qr);
  const encryptedQrValue = generateQrValue();
  // dispatch(setQr(encryptedQrValue));

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
              md: '50vh',
              lg: '56vh',
              lgp: '64vh',
              xl: '77vh',
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
              lg: 'auto',
              xl: '3%',
            },
            bottom: {
              xxs: 0,
              xs: 0,
              md: 0,
              lg: 0,
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
