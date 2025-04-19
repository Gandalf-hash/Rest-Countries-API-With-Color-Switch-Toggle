import React, { useContext, useState } from "react";
import { CountryContext } from "../context/CountryContext";

export default function CountryGrid() {
  const { countries } = useContext(CountryContext);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  // Calculate the indices for slicing the countries array
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(countries.length / countriesPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="country__grid mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentCountries.map((country) => (
          <div
            key={country.alpha3Code}
            className="country__card bg-white dark:bg-lightBlue shadow-md rounded-md p-4"
          >
            <img
              src={country.flags.png}
              alt={`${country.name} flag`}
              className="w-full h-[11rem] object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-bold">{country.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Population: {country.population}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Region: {country.region}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Capital: {country.capital}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md mr-2"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(countries.length / countriesPerPage)}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}