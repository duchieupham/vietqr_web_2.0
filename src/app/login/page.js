'use client';

import { Box } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { FormLogin } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <Box
        component="div"
        style={{
          display: 'flex',
          marginBottom: '12rem',
        }}
      >
        <FormLogin />
      </Box>
      <FooterLogin />
    </>
  );
}

export default Login;
