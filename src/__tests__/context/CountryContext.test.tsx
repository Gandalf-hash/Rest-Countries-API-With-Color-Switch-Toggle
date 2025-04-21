import React from "react";
import { render, screen } from "@testing-library/react";
import { CountryProvider, useCountryContext } from "../../context/CountryContext";
import "@testing-library/jest-dom";


// Mock component to test the context
const MockComponent = () => {
  const { countries, setCountries, selectedCountry, setSelectedCountry } = useCountryContext();

  React.useEffect(() => {
    // Set initial values for testing
    setCountries([...countries]);
  }, [setCountries, setSelectedCountry]);

  return (
    <div>
      <p>Countries: {countries.length}</p>
      <p>Selected Country: {selectedCountry?.name || "None"}</p>
    </div>
  );
};

describe("CountryContext", () => {
  it("provides default values", () => {
    render(
      <CountryProvider>
        <MockComponent />
      </CountryProvider>
    );

    expect(screen.getByText(/Countries: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Selected Country: Test Country/)).toBeInTheDocument();
  });

  it("throws an error when useCountryContext is used outside of CountryProvider", () => {
    const renderWithoutProvider = () => render(<MockComponent />);
    expect(renderWithoutProvider).toThrow(
      "useCountryContext must be used within a CountryProvider"
    );
  });
});