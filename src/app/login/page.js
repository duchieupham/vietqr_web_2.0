'use client';

import { FormLogin } from '~/components/form';

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <FormLogin />
      </div>
    </div>
  );
}

export default Login;
