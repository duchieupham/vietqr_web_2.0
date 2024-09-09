'use client';

import MainLayout from '~/layout/MainLayout';
import { lazy, useMemo } from 'react';
import { useAuthContext } from '~/contexts/AuthContext';
import _upperFirst from 'lodash-es/upperFirst';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppContext } from '~/contexts/AppContext';

const CACHE_LAYOUTS = {};

function DynamicLayout({ children }) {
  const { auth } = useAuthContext();
  const { loading } = useAppContext();

  const getLayout = (name) => {
    if (!Object.hasOwn(CACHE_LAYOUTS, name)) {
      CACHE_LAYOUTS[name] = lazy(() =>
        import('../layout/index').then((modules) => ({
          default: modules[name] ?? MainLayout,
        })),
      );
    }
    return CACHE_LAYOUTS[name];
  };

  const Layout = useMemo(() => {
    const layoutName = `${_upperFirst(auth?.role || 'main')}Layout`;
    return getLayout(layoutName);
  }, [auth]);

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 99 }} open={loading}>
        <CircularProgress />
      </Backdrop>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default DynamicLayout;
