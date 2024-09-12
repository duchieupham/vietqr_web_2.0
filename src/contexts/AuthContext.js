'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AUTH_COOKIE } from '~/constants';
import decodeJwt from '~/utils/decodeJwt';

const initialContext = {
  loading: false,
  session: null,
};

const AuthContext = createContext(initialContext);

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [session, setSession] = useState(initialContext.session);
  const [loading, setLoading] = useState(initialContext.loading);

  const authenticate = async (data) => {
    setLoading(true);
    const decodedData = decodeJwt(data);
    setSession(decodedData);
    setCookie(AUTH_COOKIE, data, {
      secure: true,
    });
    localStorage.setItem('session', JSON.stringify(decodedData));
    router.push('/dashboard');
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const clear = useCallback(() => {
    setLoading(true);
    localStorage.setItem('session', null);
    deleteCookie(AUTH_COOKIE);
    setSession(null);
    router.push('/login');
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        session,
        clear,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
