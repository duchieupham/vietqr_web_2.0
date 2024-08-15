import { Button } from '@mui/material';
import React from 'react';
import styles from '~styles/Button.module.css';

function ButtonGradient({
  children,
  gradientColors = ['#00C6FF', '#0072FF'],
  textColor = 'white',
  widthBtn = '390px',
  heightBtn = '40px',
  borderRadiusBtn = '4px',
  ...props
}) {
  return (
    <Button
      htmlType={props.type}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
        color: textColor,
        width: widthBtn,
        height: heightBtn,
        borderRadius: borderRadiusBtn,
      }}
      className={`${styles.linearGradient} ${props.className}`}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonGradient;
