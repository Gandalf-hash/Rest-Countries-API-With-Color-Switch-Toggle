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
  const [error, setError] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    const getCountries = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      try {
        const data = await fetchData("/data.json", {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!data) {
          console.error("No data found");
          setLoading(false);
          setError("No data found");
          return;
        }
        const transformedData = data.map((country) => ({
          ...country,
          flags: country.flags || { png: "", svg: "" },
          alpha3Code: country.alpha3Code || country.code,
        }));
        setCountries(transformedData);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          console.error("Request timed out");
          setError("Request timed out. Please try again later.");
        } else {
          console.error("Error fetching countries:", error);
          setError("Failed to load countries. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, [setCountries]);

  if (error)
    return <div className="p-4 text-red-600 dark:text-red-400">{error}</div>;

  if (loading) return <Loader />;

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
