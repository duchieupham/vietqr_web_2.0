import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import ContextProvider from '~/contexts/ContextProvider';
import theme from '~/theme';
import { Suspense } from 'react';
import Loading from './loading';
import DynamicLayout from './DynamicLayout';
import './globals.css';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'VietQR',
  description: '',
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ContextProvider>
                <StoreProvider>
                  <Suspense fallback={<Loading />}>
                    <DynamicLayout>{children}</DynamicLayout>
                  </Suspense>
                </StoreProvider>
              </ContextProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
