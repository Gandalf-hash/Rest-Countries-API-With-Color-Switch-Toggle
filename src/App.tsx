import "./App.css";
import TopNavbar from "./ui/top-navbar";
import SearchAndFilterSection from "./ui/search-and-filter-section";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/fetchData";
import React from "react";
import ContentsWrapper from "./components/ContentsWrapper";
import { CountryProvider, useCountryContext } from "./context/CountryContext";
import CountryGrid from "./components/CountryGrid";
import Loader from "./components/Loader";

function App() {
  return (
    <CountryProvider>
      <MainApp />
    </CountryProvider>
  );
}

function MainApp() {
  const { setCountries } = useCountryContext();
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchData("/data.json");
        if (!data) {
          console.error("No data found");
          setLoading(false);
          return;
        }
        const transformedData = data.map((country) => ({
          ...country,
          flags: country.flags || { png: "", svg: "" },
          alpha3Code: country.alpha3Code || country.code, 
        }));
        setCountries(transformedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, [setCountries]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="w-100vw min-h-screen bg-white dark:bg-deepBlue dark:text-white">
      <TopNavbar />
      <ContentsWrapper>
        <SearchAndFilterSection />
        <CountryGrid />
      </ContentsWrapper>
    </div>
  );
}

export default App;
