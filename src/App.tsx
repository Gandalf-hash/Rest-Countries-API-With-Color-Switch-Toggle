import "./App.css";
import TopNavbar from "./ui/top-navbar";
import SearchAndFilterSection from "./ui/search-and-filter-section";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import React from "react";
import ContentsWrapper from "./components/ContentsWrapper";
import { CountryContext, useCountryContext } from "./context/CountryContext";

function App() {
  const { countries, setCountries, selectedCountry, setSelectedCountry } =
    useCountryContext();

  // Fetch data on component mount
  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchData("/data.json");
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
      }
    };

    getCountries();
  }, []);

  return (
    <div className="w-100vw h-screen bg-white dark:bg-deepBlue dark:text-white">
      <TopNavbar />
      <ContentsWrapper>
        <CountryContext.Provider
          value={{
            countries,
            setCountries,
            selectedCountry,
            setSelectedCountry,
          }}
        >
          <SearchAndFilterSection filteredCountries={countries} />
        </CountryContext.Provider>
      </ContentsWrapper>
    </div>
  );
}

export default App;
