'use client';

import { Button, Stack } from '@mui/material';
import Link from 'next/link';

function Error() {
  return (
    <Stack
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Something went wrong.</h1>
      <Link href="/">
        <Button type="primary">Back to home</Button>
      </Link>
    </Stack>
  );
}

export default Error;
