'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useCallback, useEffect, useState } from 'react';
import decodeJwt from '~/utils/decodeJwt';
import { getHostUrl } from '~/utils/getHostUrl';
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
      setLoading(true);
      const decodedData = decodeJwt(data);

      const res = await axios.post(
        `${getHostUrl()}/api/auth`,
        {
          token: data,
          exp: decodedData.exp,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.status === 200) {
        setSession(decodedData);
        setLocalStorage('session', JSON.stringify(decodedData));
        console.log('prefetch');
        // for check token
        router.prefetch('/dashboard');
        setTimeout(() => {
          router.push('/dashboard');
        }, 500);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const clear = useCallback(async () => {
    try {
      const res = await axios.get(`${getHostUrl()}/api/logout`);

      if (res.status === 200) {
        setLocalStorage('session', null);
        setSession(null);
        console.log('prefetch');
        router.prefetch('/login');
        // for check token
        setTimeout(() => {
          router.push('/login');
        }, 500);
      }
    } catch (error) {
      console.error(error);
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
