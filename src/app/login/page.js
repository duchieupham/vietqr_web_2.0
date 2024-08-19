'use client';

import { Button, Container, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FormLogin } from '~/components/form';
import { LoginHeader } from '~/components/header';
import { useAuthContext } from '~/contexts/AuthContext';

function Login() {
  const t = useTranslations();
  const { login } = useAuthContext();
  const submit = async () => {
    login('admin');
  };

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs
          sx={{
            justifyContent: 'start',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <LoginHeader />
        </Grid>
        <Grid item xs>
          <span>LOGO</span>
        </Grid>
        <Grid
          item
          xs
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Button>{t('contact')}</Button>
        </Grid>
      </Grid>
      <FormLogin />
    </Container>
  );
}

export default Login;
