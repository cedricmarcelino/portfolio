import RootLayout from '@/components/RootLayout/RootLayout';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import './global.css';
import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
