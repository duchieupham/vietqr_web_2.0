'use client';

import { createContext, useContext, useState } from 'react';

const initialContext = {};

const LanguageContext = createContext(initialContext);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguageContext = () => useContext(LanguageContext);
