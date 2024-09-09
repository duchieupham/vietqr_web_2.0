import { Button } from '@mui/material';
import styles from '~styles/Button.module.css';

function ButtonGradient({
  children,
  gradientColors = ['#00C6FF', '#0072FF'],
  style,
  ...props
}) {
  const defaultStyles = {
    backgroundImage: `linear-gradient(to right, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%)`,
    color: 'white',
    width: '360px',
    height: '40px',
    borderRadius: '40px',
    ...style,
  };

  return (
    <Button
      type={props.type}
      style={defaultStyles}
      className={`${styles.linearGradient} ${props.className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonGradient;
