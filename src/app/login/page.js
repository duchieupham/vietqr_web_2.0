'use client';

import { useTranslations } from 'next-intl';
import { FormLogin } from '~/components/form';
import { useAuthContext } from '~/contexts/AuthContext';

function Login() {
  const t = useTranslations();
  const { login } = useAuthContext();
  const submit = async () => {
    login('admin');
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>{t('welcome')}</div>
      <FormLogin />
    </div>
  );
}

export default Login;
