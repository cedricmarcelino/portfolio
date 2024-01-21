import RootLayout from '@/components/RootLayout/RootLayout';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import './global.css';

import type { AppProps } from "next/app";
import ThemeRegistry from '@/utils/ThemeRegistry';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <ThemeRegistry options={{ key: 'mui-theme' }}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeRegistry>
    </AppCacheProvider>
  );
}
