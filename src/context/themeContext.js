import React, { useContext, createContext, useState } from "react";

import colorThemes from "../colorThemes";
const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeContextUpdate);
};

export const ThemeProvider = ({ children }) => {
  const [selectTheme, setSelectTheme] = useState(0);
  const theme = colorThemes[selectTheme];

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdate.Provider value={setSelectTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};
