'use client';

import { Box, Grid, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import useDisplay from '~/hooks/useDisplay';

function Login() {
  return (
    <Stack sx={{ minHeight: 1 }}>
      <Box
        component="nav"
        sx={{
          height: '100%',
        }}
      >
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // minHeight: '100vh',
          padding: { xs: 2, md: 0 },
        }}
      >
        <Grid
          container
          spacing={2}
          columns={16}
          justifyContent="center"
          alignItems="center"
          sx={{
            display: { xs: 'block', md: 'flex' },
          }}
        >
          <Grid
            xs={16}
            md={8}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
            }}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        component="footer"
        sx={{
          height: '100%',
        }}
      >
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
