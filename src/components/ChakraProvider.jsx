"use client";
import * as React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// customize chakra theme for background, text color, etc.
const theme = extendTheme({
  // set default theme is dark mode
  config: {
    initialColorMode: "dark",
  },

  styles: {
    global: {
      body: {
        bg: "#0a0a09",
        color: "#f0f0f0",
      },
    },
  },
});

export default function ChakraWrapper(props) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      {props.children}
    </ChakraProvider>
  );
}
