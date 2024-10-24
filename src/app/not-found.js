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
        height: '100%',
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
          width={400}
          height={150}
        />
        <h1>{`${t('404')}.`}</h1>
      </Box>
      <Link href="/">
        <Button variant="contained">
          <Typography variant="button">{t('backToHome')}</Typography>
        </Button>
      </Link>
    </Stack>
  );
}

export default NotFound;
