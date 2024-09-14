'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { createContext, useCallback, useEffect, useState } from 'react';
import { AUTH_COOKIE } from '~/constants';
import decodeJwt from '~/utils/decodeJwt';
import { getLocalStorage, setLocalStorage } from '~/utils/localStorageHelper';

const initialContext = {
  loading: false,
  session: null,
};

const AuthContext = createContext(initialContext);

function AuthContextProvider({ children }) {
  const router = useRouter();
  const [session, setSession] = useState(initialContext.session);
  const [loading, setLoading] = useState(initialContext.loading);

  const authenticate = async (data) => {
    try {
      const decodedData = decodeJwt(data);
      const expires = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days

      setSession(decodedData);
      setCookie(AUTH_COOKIE, data, {
        secure: true,
        expire: decodedData.exp || expires,
        sameSite: 'Strict',
      });
      setLocalStorage('session', JSON.stringify(decodedData));

      await router.push('/dashboard');
    } catch (error) {
      console.error('Signin failed:', error);
    }
  };

  const clear = useCallback(async () => {
    try {
      localStorage.setItem('session', null);
      deleteCookie(AUTH_COOKIE);
      setSession(null);

      await router.push('/login');
    } catch (error) {
      console.error('Signout error:', error);
    }
  }, []);

  const handleCheckAuth = () => {
    const storedSession = getLocalStorage('session');

    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  };

  useEffect(() => {
    handleCheckAuth();
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
export { AuthContext, AuthContextProvider };
