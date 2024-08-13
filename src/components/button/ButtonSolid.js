import { Button } from 'antd';
import React from 'react';

function ButtonSolid({ children }) {
  return (
    <Button
      className=""
      style={{
        width: '390px',
        height: '50px',
        borderRadius: '30px',
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonSolid;
