import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { GoSearch } from "react-icons/go";
import { Country } from "../types/Country";
export const CountrySearch = () => {
  const [query, setQuery] = useState<string>("");
  const [countries, setCountries] = useState<Country[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filter countries based on the query
    const filtered = countries.filter((country: Country) =>
      country.name.toLowerCase().includes(value)
    );

    // Optionally, you can log or use the filtered results
    console.log(filtered);
  };

  return (
    <div
      className={`search-bar search__query-${query} w-full md:w-1/2 xl:w-[30%] flex items-center`}
      data-testid="search-bar"
    >
      <GoSearch
        className="absolute ml-[.8rem] text-gray-500 dark:text-white"
        size={20}
      />
      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>
      <input
        className={clsx(
          " w-full dark:bg-lightBlue dark:text-mediumWhite text-deepBlue bg-white",
          "dark:placeholder:text-mediumWhite placeholder:text-gray-500 placeholder:text-[1rem] placeholder:italic"
        )}
        id="search"
        type="text"
        placeholder="Search for a country..."
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};
