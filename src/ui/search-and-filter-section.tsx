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
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-[4.5rem]">
      <CountrySearch />
      <CountryFilter />
    </div>
  );
}

export default SearchAndFilterSection;
