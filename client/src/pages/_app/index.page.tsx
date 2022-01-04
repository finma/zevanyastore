import "tailwindcss/tailwind.css";
import "src/style/style.css";

import { ThemeProvider } from "@mui/material/styles";
import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "react-use-cart";

import theme from "../../theme/theme";

const App = (props: CustomAppProps) => {
  const { Component, pageProps } = props;
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Zevanyastore</title>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
