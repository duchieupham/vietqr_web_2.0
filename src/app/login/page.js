'use client';

import { Container } from '@mui/material';
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
      <LoginHeader />
      <FormLogin />
    </Container>
  );
}

export default Login;
