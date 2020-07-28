import React, { useState, createContext, useContext } from "react";

type ThemeType = "light" | "dark";
type SetThemeType = React.Dispatch<React.SetStateAction<ThemeType>>;

const ThemeContext = createContext<ThemeType | undefined>(undefined);
const SetThemeContext = createContext<SetThemeType | undefined>(undefined);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <SetThemeContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </SetThemeContext.Provider>
  );
};

const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};

const useSetTheme = () => {
  const ctx = useContext(SetThemeContext);
  if (ctx === undefined) {
    throw new Error("useSetTheme must be used within a ThemeProvider");
  }
  return ctx;
};

export { ThemeProvider, useTheme, useSetTheme };
