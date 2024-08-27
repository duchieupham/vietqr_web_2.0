'use client';

import { useMediaQuery } from '@mui/material';
// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useEffect, useState } from 'react';
import theme from '~/theme';

const initialState = {
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => {},
  onHoverEnter: () => {},
  onHoverLeave: () => {},
};

const CollapseDrawerContext = createContext(initialState);

export function CollapseDrawerProvider({ children }) {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [collapse, setCollapse] = useState({
    click: false,
    hover: false,
  });
  useEffect(() => {
    if (isMobile) {
      setCollapse({ click: false, hover: false });
    }
  }, [isMobile]);

  const handleToggleCollapse = () => {
    setCollapse({ ...collapse, click: !collapse.click });
  };

  const handleHoverEnter = () => {
    if (collapse.click) {
      setCollapse({ ...collapse, hover: true });
    }
  };

  const handleHoverLeave = () => {
    setCollapse({ ...collapse, hover: false });
  };
  return (
    <CollapseDrawerContext.Provider
      value={{
        isCollapse: collapse.click && !collapse.hover,
        collapseClick: collapse.click,
        collapseHover: collapse.hover,
        onToggleCollapse: handleToggleCollapse,
        onHoverEnter: handleHoverEnter,
        onHoverLeave: handleHoverLeave,
      }}
    >
      {children}
    </CollapseDrawerContext.Provider>
  );
}
export const useCollapseDrawerContext = () => useContext(CollapseDrawerContext);
