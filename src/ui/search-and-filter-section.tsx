import React from "react";
import { CountrySearch } from "../components/CountrySearch";
import { CountryFilter } from "../components/CountryFilter";


interface Country {
  name: string;
  region: string;
}

function SearchAndFilterSection({
  filteredCountries,
}: {
  filteredCountries: Country[];
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-[4.5rem]">
      <CountrySearch />
      <CountryFilter filteredCountries={filteredCountries} />
    </div>
  );
}

export default SearchAndFilterSection;
