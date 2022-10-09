import { AppProps } from "next/app";
import React from "react";
import useLocalStorage from "../src/Hooks/useSavedState";

import { ThemeProvider } from "styled-components";
import ResetCSS from "../src/style/ResetCSS";
import GlobalCSS from "../src/style/GlobalCSS";

import { light } from "../src/style/theme/light";
import { dark } from "../src/style/theme/dark";
import SwitchTheme from "../src/components/SwitchTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorage("THEME", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <SwitchTheme
        toggleTheme={toggleTheme}
        url={theme.urlToImage}
        name={theme.title}
      />
      <Component {...pageProps} />
      <ResetCSS />
      <GlobalCSS />
    </ThemeProvider>
  );
}

export default MyApp;
