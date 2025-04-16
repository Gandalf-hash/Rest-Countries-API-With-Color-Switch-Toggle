import "./App.css";
import TopNavbar from "./ui/top-navbar";
import SearchAndFilterSection from "./ui/search-and-filter-section";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import React from "react";
import ContentsWrapper from "./components/ContentsWrapper";

// types
type Country = {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  subregion: string;
  population: number;
  area: number;
  languages: Array<{ name: string }>;
  currencies: Array<{ code: string; name: string; symbol: string }>;
  flag: string;
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>(
    []
  );

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
        <SearchAndFilterSection filteredCountries={countries} />
      </ContentsWrapper>
    </div>
  );
}

export default App;
