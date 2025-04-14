import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  selectedCountry: Country | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <CountryContext.Provider value={{ countries, setCountries, selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = (): CountryContextProps => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};