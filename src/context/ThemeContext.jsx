"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
