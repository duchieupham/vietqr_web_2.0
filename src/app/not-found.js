'use client';

import { Button, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function NotFound() {
  const t = useTranslations();
  return (
    <Stack
      style={{
        height: '100%',
        minHeight: '15rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{`${t('404')}.`}</h1>
      <Link href="/">
        <Button type="primary">{t('backToHome')}</Button>
      </Link>
    </Stack>
  );
}

export default NotFound;
