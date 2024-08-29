'use client';

import { getCookie } from 'cookies-next';
import { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_LANG, LOCALE_COOKIE } from '~/constants';

const initialContext = {
  language: DEFAULT_LANG,
};

const AppContext = createContext(initialContext);

export function AppContextProvider({ children }) {
  const [language, setLanguage] = useState(initialContext.language);

  useEffect(() => {
    const locale = getCookie(LOCALE_COOKIE);
    if (language !== locale) setLanguage(locale);
  }, []);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
