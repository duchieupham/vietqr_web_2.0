import { CircularProgress, Stack } from '@mui/material';
import Image from 'next/image';

const GradientCircularProgress = () => (
  <>
    <svg width={0} height={0}>
      <defs>
        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e01c1c" />
          <stop offset="100%" stopColor="#005aaa" />
        </linearGradient>
      </defs>
    </svg>
    <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
  </>
);
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
