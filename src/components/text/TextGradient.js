import { Typography, useTheme } from '@mui/material';

function TextGradient({ children, style }) {
  const theme = useTheme();

  const styled = {
    backgroundImage: theme.palette.bright.blue.linear,
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
