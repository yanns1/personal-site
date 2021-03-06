// fonts
import "typeface-montserrat";
import "typeface-merriweather";
// components
import React from "react";
import { ThemeProvider } from "./src/components/contexts/ThemeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
