import { Button } from '@mui/material';
import React from 'react';

function ButtonSolid({ children, style, ...props }) {
  return (
    <Button
      style={{
        width: '390px',
        height: '50px',
        borderRadius: '30px',
        backgroundImage: 'linear-gradient(to right, #E1EFFF, #E5F9FF)',
        color: '#0A7AFF',
        ...style,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonSolid;
