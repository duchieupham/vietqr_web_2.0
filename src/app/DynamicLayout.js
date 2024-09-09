'use client';

import MainLayout from '~/layout/MainLayout';
import { lazy, useMemo } from 'react';
import _upperFirst from 'lodash-es/upperFirst';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppContext } from '~/contexts/AppContext';
import { usePathname } from 'next/navigation';

const CACHE_LAYOUTS = {};

function DynamicLayout({ children }) {
  const { loading } = useAppContext();
  const pathname = usePathname();
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
    const layoutName = `${_upperFirst(pathname.replace('/', ''))}Layout`;

    return getLayout(layoutName) || MainLayout;
  }, [pathname]);

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 99 }} open={loading}>
        <CircularProgress />
      </Backdrop>
      <Layout>{children}</Layout>
    </>
  );
}

export default DynamicLayout;
