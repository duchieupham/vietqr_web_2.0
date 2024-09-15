'use client';

import MainLayout from '~/layout/MainLayout';
import { lazy, useMemo } from 'react';
import _upperFirst from 'lodash-es/upperFirst';
import _camelCase from 'lodash-es/camelCase';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useAppContext, useAuthContext } from '~/contexts/hooks';
import Snackbar from '~/components/feedback/Snackbar';
import LoadingContainer from '~/components/feedback/LoadingContainer';

const CACHE_LAYOUTS = {};

function DynamicLayout({ children }) {
  const { loading: authLoading } = useAuthContext();
  const { loading: appLoading, isSubmitting } = useAppContext();
  const pathname = usePathname();
  const isLoading = authLoading || appLoading;

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
    const firstRoute = pathname.split('/')[1];
    const layoutName = `${_upperFirst(_camelCase(firstRoute))}Layout`;

    return getLayout(layoutName) || MainLayout;
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Snackbar />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <Backdrop sx={{ color: '#fff', zIndex: 99 }} open={isSubmitting}>
            <CircularProgress />
          </Backdrop>
          <Layout>{children}</Layout>
        </>
      )}
    </Box>
  );
}

export default DynamicLayout;
