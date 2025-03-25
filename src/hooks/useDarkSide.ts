import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      const root = window.document.documentElement;
      const theme = savedTheme === "dark" ? "dark" : "light";

      root.classList.remove(savedTheme === "dark" ? "light" : "dark");
      root.classList.add(theme);
      setTheme(savedTheme);
    }
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return { theme, setTheme };
}