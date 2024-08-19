import { Box } from '@mui/material';

function TextGradient({ text }) {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
    >
      {text}
    </Box>
  );
}
export default TextGradient;
