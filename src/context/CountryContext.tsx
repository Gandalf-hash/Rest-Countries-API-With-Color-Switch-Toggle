import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { Country } from "../types/Country";

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  selectedCountry: Country | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}

export const CountryContext = createContext<CountryContextProps>({
  countries: [],
  setCountries: () => {},
  selectedCountry: null,
  setSelectedCountry: () => {},
});

export const CountryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const value = useMemo(
    () => ({ countries, setCountries, selectedCountry, setSelectedCountry }),
    [countries, selectedCountry]
  );
  
  return (
    <CountryContext.Provider
      value={value}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = (): CountryContextProps => {
  const context = useContext(CountryContext);
 
  return context;
};
