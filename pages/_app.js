import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { createTheme } from "@mui/material/styles";

export default function MyApp(props) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
