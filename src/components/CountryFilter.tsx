import clsx from "clsx";
import React from "react";

interface Country {
  name: string;
  region: string;
}

export const CountryFilter = ({
  filteredCountries,
  onRegionChange,
}: {
  filteredCountries: Country[];
  onRegionChange: (region: string) => void;
}) => {
  return (
    <div className="filter-container filtered__results w-1/2 flex flex-col md:flex-row  md:justify-end">
      <form action="">
        <label htmlFor="filter" className="sr-only">
          Filter by Region
        </label>
        <select
          id="filter"
          name="filter"
          className={clsx(
            "w-full mt-[3.5rem] md:mt-0 bg-white dark:bg-lightBlue dark:text-mediumWhite text-deepBlue border",
            "border-gray-300 rounded-md"
          )}
          onChange={(e) => onRegionChange(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled selected>
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
