import { Typography } from '@mui/material';

function TextGradient({ children, style }) {
  const styled = {
    backgroundImage: 'linear-gradient(to right, #00C6FF 0%, #0072FF 50%)',
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
