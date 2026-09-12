import React, { createContext, useContext, useState } from 'react';
import { companyInfo } from '../data/companyInfo';

const SettingsContext = createContext({
  settings: companyInfo,
  loading: false,
  refreshSettings: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [settings] = useState(companyInfo);

  return (
    <SettingsContext.Provider value={{ settings, loading: false, refreshSettings: () => {} }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
