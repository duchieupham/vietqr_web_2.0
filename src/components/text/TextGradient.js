import { Typography } from '@mui/material';

function TextGradient({ children, style }) {
  const styled = {
    backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    ...style,
  };
  return <Typography sx={styled}>{children}</Typography>;
}
export default TextGradient;
