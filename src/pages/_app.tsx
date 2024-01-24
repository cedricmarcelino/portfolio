import RootLayout from '@/components/RootLayout/RootLayout';
import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import theme from '../theme'
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Head from 'next/head';
import { ROUTE } from '@/constants/enum';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
    <Head>
      <title>My Portfolio | Cedric Jastine Marcelino</title>
      <meta name="description" content="A Web Development Portfolio by Cedric Jastine Marcelino" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <CssBaseline>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RootLayout path={router.pathname as ROUTE}>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </StyledEngineProvider>
     </CssBaseline>
    </>
  );
}