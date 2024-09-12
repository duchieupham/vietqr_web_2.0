import { Button } from '@mui/material';

function ButtonGradient({
  children,
  gradientColors = ['#00C6FF', '#0072FF'],
  style,
  ...props
}) {
  const defaultStyles = {
    width: '360px',
    height: '40px',
    borderRadius: '40px',
    margin: '10px 0',
    ':hover': {
      opacity: 0.8,
    },
    ...style,
  };

  return (
    <Button
      type={props.type}
      sx={defaultStyles}
      className={props.className}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonGradient;
