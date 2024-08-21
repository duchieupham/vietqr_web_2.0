import { Typography } from '@mui/material';

function TextGradient({ text, otherStyles }) {
  return (
    <Typography
      sx={{
        backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        ...otherStyles,
      }}
    >
      {text}
    </Typography>
  );
}
export default TextGradient;
