import clsx from "clsx";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCountryContext } from "../context/CountryContext";
import { Country } from "../types/Country";


export const CountryFilter = ({}: {}) => {
  const {countries, setCountries, selectedCountry, setSelectedCountry} = useCountryContext();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value;
    const filteredCountries = countries.filter(
      (country: Country) => country.region === selectedRegion
    );
    setCountries(filteredCountries);
  }
  return (
    <div className="filter-container filtered__results w-1/2 flex flex-col md:flex-row  md:justify-end">
      <form action="">
        <label htmlFor="filter" className="sr-only">
          Filter by Region
        </label>
        <IoIosArrowDown />
        <select
          id="filter"
          name="filter"
          className={clsx(
            "w-full mt-[3.5rem] md:mt-0 bg-white dark:bg-lightBlue dark:text-mediumWhite text-deepBlue border",
            "border-gray-300 rounded-md"
          )}
          onChange={handleFilterChange}
          defaultValue=""
        >
          <option value="" disabled>
            Select a region
          </option>
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
