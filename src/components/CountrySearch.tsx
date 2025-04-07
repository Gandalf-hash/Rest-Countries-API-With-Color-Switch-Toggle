import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Country } from "../types/Country";
import clsx from "clsx";

export const CountrySearch = () => {
  const [query, setQuery] = useState<string>("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filter countries based on the query
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value)
    );

    setFilteredCountries(filtered);
  };

  return (
    <div className="flex items-center justify-start mt-4 mb-4">
      <input
        id="search"
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={handleSearch}
        className={clsx(
          "lg:w-[40%] w-full dark:bg-sky dark:text-white text-black text-sm p-2.5 border-sky",
          "bg-white h-14"
        )}
      />
    </div>
  );
};
