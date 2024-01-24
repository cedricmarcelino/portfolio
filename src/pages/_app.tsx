import RootLayout from '@/components/RootLayout/RootLayout';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from "next/app";
import { ThemeProvider } from '@emotion/react';
import theme from '../theme'
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </CssBaseline>
    </AppCacheProvider>
  );
}
