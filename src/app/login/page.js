'use client';

import { Box, Grid, Stack } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import CreateQR from '~/sections/login/CreateQR';

function Login() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Box component="nav">
        <Navbar />
      </Box>
      <Box component="main" sx={{}}>
        <Grid container columns={16} rowSpacing={3}>
          <Grid item xs={8}>
            <CreateQR />
          </Grid>
          <Grid item xs={8}>
            <LoginForm />
          </Grid>
        </Grid>
      </Box>

      <Box component="footer" sx={{ mt: 'auto' }}>
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
