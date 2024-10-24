import { Stack } from '@mui/material';
import Image from 'next/image';
import GradientCircularProgress from './GradientCircularProgress';

function LoadingWithLogo({ sx, style }) {
  return (
    <Stack
      style={style}
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Image
        alt="logo"
        src="/images/VietQRLogo.png"
        width={300}
        height={150}
        priority
      />
      <GradientCircularProgress />
    </Stack>
  );
}

export default LoadingWithLogo;
