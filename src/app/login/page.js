'use client';

import { Box, Grid, Stack } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';

function Login() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Box component="nav">
        <Navbar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, md: 0 },
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Grid
            item
            xs={16}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
