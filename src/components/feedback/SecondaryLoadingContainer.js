import { CircularProgress, Stack } from '@mui/material';

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
function SecondaryLoadingContainer() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#c2c2c250',
      }}
    >
      <GradientCircularProgress />
    </Stack>
  );
}

export default SecondaryLoadingContainer;
