'use client';

import { Button, Flex } from 'antd';
import { useTranslations } from 'next-intl';
import { useAuthContext } from '~/contexts/AuthContext';

function MainLayout({ children }) {
  const t = useTranslations();
  const { auth, clear } = useAuthContext();

  const logout = () => {
    clear();
  };

  return (
    <div>
      <Flex
        style={{
          justifyContent: 'space-between',
        }}
      >
        <h1>Layout</h1>
        <div>
          {auth.session}
          {auth.session && (
            <Button style={{ marginLeft: 12 }} onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </Flex>

      {children}
    </div>
  );
}

export default MainLayout;
