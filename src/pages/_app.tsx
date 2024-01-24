import RootLayout from '@/components/RootLayout/RootLayout';
import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import theme from '../theme'
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import { ROUTE } from '@/constants/enum';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  let title;
  switch(router.pathname) {
      case ROUTE.HOME:
        title = 'Home'
        break;
      case ROUTE.ABOUT:
          title = 'About me'
      break;
      case ROUTE.CONTACT:
          title = 'Contact me'
      break;
      case ROUTE.PROJECTS:
          title = 'My Projects'
      break;
      default:
          title = '404'
          break;
  }
  return (
    <>
    <Head>
      <title>{title} | Cedric Jastine Marcelino</title>
      <meta name="description" content="A Web Development Portfolio by Cedric Jastine Marcelino" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <CssBaseline>
      <ThemeProvider theme={theme}>
        <RootLayout path={router.pathname as ROUTE}>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
     </CssBaseline>
    </>
  );
}