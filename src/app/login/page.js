'use client';

import { Button } from 'antd';
import { useTranslations } from 'next-intl';
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
      <Button onClick={submit}>Login</Button>
    </div>
  );
}

export default Login;
