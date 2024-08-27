'use client';

import { Box, Grid, Stack, useMediaQuery } from '@mui/material';
import { FooterLogin } from '~/components/footer';
import { LoginForm } from '~/components/form';
import Navbar from '~/components/navbar/Navbar';
import CreateQR from '~/sections/login/CreateQR';
import theme from '~/theme';

function Login() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  let direction = 'row';
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTabletSize = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)',
  );
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTabletVertical = isPortrait && isTabletSize;
  if (isMobile || isTabletVertical) {
    direction = 'column';
  }

  return (
    <Stack sx={{ minHeight: isTabletVertical ? '' : '100vh' }}>
      <Box component="nav">
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Grid container columns={16} rowSpacing={3} direction={direction}>
          {isMobile && (
            <Grid item xs={8}>
              <LoginForm
                stackStyle={{
                  marginTop: '3rem',
                }}
              />
            </Grid>
          )}

          {isTabletVertical ? (
            <>
              <Grid item xs={16}>
                <LoginForm
                  stackStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </Grid>
              <Grid item xs={16}>
                <CreateQR
                  containerStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </Grid>
            </>
          ) : (
            !isMobile && (
              <>
                <Grid item xs={8}>
                  <CreateQR />
                </Grid>
                <Grid item xs={8}>
                  <LoginForm />
                </Grid>
              </>
            )
          )}
        </Grid>
      </Box>
      <Box component="footer" sx={{ mt: 'auto' }}>
        <FooterLogin />
      </Box>
    </Stack>
  );
}

export default Login;
