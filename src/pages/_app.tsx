import RootLayout from '@/components/RootLayout/RootLayout';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import './global.css';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AppCacheProvider>
  );
}
