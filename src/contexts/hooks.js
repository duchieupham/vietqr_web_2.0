'use client';

import { useContext } from 'react';
import { AppContext } from './providers/AppContextProvider';
import { SnackbarContext } from './providers/SnackbarContextProvider';
import { AuthContext } from './providers/AuthContextProvider';

export const useAppContext = () => useContext(AppContext);
export const useSnackbarContext = () => useContext(SnackbarContext);
export const useAuthContext = () => useContext(AuthContext);
