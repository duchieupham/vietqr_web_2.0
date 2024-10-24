import { Button } from '@mui/material';
import React from 'react';

function ButtonDefault({ children }) {
  return (
    <Button
      style={{
        backgroundColor: '#0A7AFF',
        color: '#fff',
        width: '390px',
        height: '50px',
        borderRadius: '5px',
        boxShadow: 'none',
      }}
      className="btn-default"
    >
      {children}
    </Button>
  );
}

export default ButtonDefault;
