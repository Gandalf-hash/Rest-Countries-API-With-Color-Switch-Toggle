import React, { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import useDarkSide from "../hooks/useDarkSide";

export const ColorSwitchToggle = () => {
  const { colorTheme, setTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = () => {
    const newMode = !darkSide;
    setTheme(newMode ? "dark" : "light");
    setDarkSide(newMode);
  };

  return (
    <div className="element-switch-toggle flex flex-end">
      <button
        onClick={toggleDarkMode}
        className="flex flex-row gap-2 items-center font-medium px-4 py-2"
      >
        {darkSide ? (
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
