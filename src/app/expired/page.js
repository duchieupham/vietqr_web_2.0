'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  const t = useTranslations();
  return (
    <Stack
      style={{
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Image
          priority
          alt="logo"
          src="/images/logo.png"
          width={500}
          height={200}
        />
        <h1>{`${t('Session Expired')}.`}</h1>
      </Box>
      <Link href="/">
        <Button variant="contained">
          <Typography variant="button">{t('backToLogin')}</Typography>
        </Button>
      </Link>
    </Stack>
  );
}

export default NotFound;
