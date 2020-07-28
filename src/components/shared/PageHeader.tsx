import React from "react";
// components
import StyledPageHeader from "../styled/StyledPageHeader";
// contexts
import { useTheme, useSetTheme } from "../contexts/ThemeContext";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../../assets/light.svg";

type Props = {
  title: string;
};

const PageHeader: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const setTheme = useSetTheme();

  return (
    <StyledPageHeader theme={theme}>
      <h1>{title}</h1>
      {theme === "light" ? (
        <MoonSvg
          onClick={() => setTheme("dark")}
          width="2rem"
          fill="currentColor"
          title="Moon icon"
        />
      ) : (
          <LightSvg
            onClick={() => setTheme("light")}
            width="2rem"
            fill="currentColor"
            title="Light icon"
          />
        )}
    </StyledPageHeader>
  );
};

export default PageHeader;
