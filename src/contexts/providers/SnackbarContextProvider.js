'use client';

import { createContext, useState } from 'react';
import { SNACKBAR_TRANSITIONS } from '~/components/feedback/Snackbar';

const initialContext = {
  open: false,
  snackbar: {
    transition: SNACKBAR_TRANSITIONS.FADE,
    message: '',
    duration: 2000,
    position: {
      vertical: 'top',
      horizontal: 'right',
    },
    type: 'default',
  },
};

const SnackbarContext = createContext(initialContext);

function SnackbarContextProvider({ children }) {
  const [open, setOpen] = useState(initialContext.open);
  const [snackbar, setSnackbar] = useState(initialContext.snackbar);

  return (
    <SnackbarContext.Provider
      value={{
        open,
        snackbar,
        setOpen,
        setSnackbar,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}

export { SnackbarContext, SnackbarContextProvider };
