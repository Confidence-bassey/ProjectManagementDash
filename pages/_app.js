import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
