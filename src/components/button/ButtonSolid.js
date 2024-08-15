import { Button } from '@mui/material';
import React from 'react';

function ButtonSolid({ children, props }) {
  return (
    <Button
      style={{
        width: '390px',
        height: '50px',
        borderRadius: '30px',
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonSolid;
