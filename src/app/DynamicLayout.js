'use client';

import MainLayout from '~/layout/MainLayout';
import { lazy, useMemo } from 'react';
import { useAuthContext } from '~/contexts/AuthContext';
import _upperFirst from 'lodash-es/upperFirst';

const CACHE_LAYOUTS = {};

function DynamicLayout({ children }) {
  const { auth } = useAuthContext();

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

  return <Layout>{children}</Layout>;
}

export default DynamicLayout;
