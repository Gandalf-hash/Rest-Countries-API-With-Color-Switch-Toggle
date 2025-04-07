import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { Country } from "../types/Country";
import clsx from "clsx";
import { GoSearch } from "react-icons/go";

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
      <GoSearch
        className="absolute ml-[.4rem] text-gray-500 dark:text-white"
        size={20}
      />
      <input
        className={clsx(
          "md:w-[40%] w-full dark:bg-lightBlue dark:text-mediumWhite text-deepBlue bg-white"
        )}
        id="search"
        type="text"
        placeholder="Type to search..."
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};
