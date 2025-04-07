import React, { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import useDarkSide from "../hooks/useDarkSide";

export const ColorSwitchToggle = () => {
  const { theme, setTheme } = useDarkSide();
  const [isDarkSide, setIsDarkSide] = useState(theme === "dark" ? true : false);

  function toggleTheme() {
    setTheme((prevTheme: string) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      setIsDarkSide(prevTheme === "light" ? true : false);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  return (
    <div className="element-switch-toggle flex flex-end">
      <button
        onClick={toggleTheme}
        className="btn flex flex-row gap-2 items-center font-medium px-4 py-2"
      >
        {isDarkSide ? (
          <>
            <IoSunny />
            Light Mode
          </>
        ) : (
          <>
            <IoMoon />
            Dark Mode
          </>
        )}
      </button>
    </div>
  );
};
