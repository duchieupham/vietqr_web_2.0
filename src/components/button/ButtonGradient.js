import { Button } from 'antd';
import React from 'react';
import styles from '~styles/Button.module.css';

function ButtonGradient({ children }) {
  return (
    <Button
      style={{
        backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)',
        color: 'white',
        height: '40px',
      }}
      className={styles.linearGradient}
    >
      {children}
    </Button>
  );
}

export default ButtonGradient;
