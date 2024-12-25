import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
  language: string;
  setLanguage: (lang: string) => void;
}

const defaultContext: LanguageContextType = {
  t: (key: string) => key,
  language: 'en',
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageContext.Provider value={defaultContext}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};