'use client';

import { useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import LoadingContainer from '~/components/LoadingContainer';
import { useLocalStorage } from '~/hooks/useLocalStorage';

const initialContext = {
  loading: true,
  auth: {
    session: null,
    role: null,
  },
};

const AuthContext = createContext(initialContext);

export function AuthContextProvider({ children }) {
  const router = useRouter();
  const [session, setSession] = useLocalStorage('session');
  const [loading, setLoading] = useState(initialContext.loading);
  const [auth, setAuth] = useState(initialContext.auth);

  const authenticate = useCallback(() => {
    setLoading(true);
    if (!session) {
      router.push('/login');
      setLoading(false);
      return;
    }
    setAuth({
      session,
      role: 'admin',
    });
    router.push('/');
    setLoading(false);
  }, [session]);

  const login = useCallback((info) => {
    if (info) {
      setAuth({
        session: info,
        role: 'admin',
      });
      setSession(info);
      console.log('session', session);
      router.push('/');
    }
  }, []);

  const clear = useCallback(() => {
    setAuth(initialContext.auth);
    setSession(null);
    router.push('/login');
  }, []);

  useEffect(() => {
    authenticate();
  }, [session]);

  if (loading) return <LoadingContainer />;
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        clear,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
