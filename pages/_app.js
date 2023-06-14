import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

/* test */
import { amber, grey, deepOrange } from "@mui/material/colors";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { createTheme } from "@mui/material/styles";

import { ColorModeContext } from "@components/Toggle/Color";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Design token functions
/* 
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
          primary: {
            // main: "#556cd6",
            // main: "#6E9CE2",
            main: "#3c988f",
            dark: "#1b1c23",
            light: "#63ACA5",
          },
          secondary: {
            // main: "#f2f2f2",
            main: "#929292",
            dark: "#555555",
            light: "#f2f2f2",
          },
          success: { main: "#198754" },
          info: { main: "#2e9cf2" }, //"#0dcaf0"
          warning: { main: "#ffc107" },
          danger: { main: "#dc3545" },
          light: { main: "#f8f9fa" },
          dark: { main: "#212529" },
          error: {
            main: deepOrange[900],
          },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
          primary: {
            // main: "#556cd6",
            // main: "#6E9CE2",
            main: "#3c988f",
            dark: "#1b1c23",
            light: "#63ACA5",
          },
          secondary: {
            // main: "#f2f2f2",
            main: "#929292",
            dark: "#555555",
            light: "#f2f2f2",
          },
          success: { main: "#198754" },
          info: { main: "#2e9cf2" }, //"#0dcaf0"
          warning: { main: "#ffc107" },
          danger: { main: "#dc3545" },
          light: { main: "#f8f9fa" },
          dark: { main: "#212529" },
          error: {
            main: deepOrange[900],
          },
        }),
  },
});
 */

/*
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
*/

export default function MyApp(props) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const colorMode = React.useContext(ColorModeContext);
  // console.log(colorMode);
  // const [mode, setMode] = React.useState("light");
  // const colorMode = React.useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       // setMode((prevMode: PaletteMode) =>
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  // console.log(theme);
  // return false;
  // Update the theme only if the mode changes
  // const themes = React.useMemo(
  //   () => createTheme(getDesignTokens(mode)),
  //   [mode]
  // );

  // console.log(themes);

  // const darkTheme = React.useMemo(
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
      {/* <ColorModeContext value={colorMode}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </ColorModeContext> */}
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// MyApp.getInitialProps = async (context) => {
//   // console.log(context.ctx.req["cookies"]);
//   // console.log(context.pageProps);
//   return {
//     cookie: context.ctx.req["cookies"],
//     pageProps: context.pageProps,
//   };
// };
