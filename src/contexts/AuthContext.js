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
import LoadingContainer from '~/components/LoadingContainer';
import decodeJwt from '~/utils/decodeJwt';

const initialContext = {
  loading: true,
  session: null,
};

const AuthContext = createContext(initialContext);

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [session, setSession] = useState(initialContext.session);
  const [loading, setLoading] = useState(initialContext.loading);

  const authenticate = (data) => {
    setSession(decodeJwt(data));
    setCookie('auth_token', data, {
      secure: true,
    });
    router.push('/');
  };

  const clear = useCallback(() => {
    localStorage.setItem('session', null);
    deleteCookie('auth_token');
    setSession(null);
    router.push('/login');
  }, []);

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
    setLoading(false);
  }, []);

  if (loading) return <LoadingContainer />;

  return (
    <AuthContext.Provider
      value={{
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
