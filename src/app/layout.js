import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import ContextProvider from '~/contexts/ContextProvider';
import theme from '~/theme';
import { Suspense } from 'react';
import SecondaryLoadingContainer from '~/components/feedback/SecondaryLoadingContainer';
import IntlProvider from '~/contexts/IntlProvider';
import DynamicLayout from './DynamicLayout';
import './globals.css';
import StoreProvider from '../contexts/StoreProvider';

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
          <IntlProvider messages={messages} locale={locale}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ContextProvider>
                <StoreProvider>
                  <DynamicLayout>
                    <Suspense fallback={<SecondaryLoadingContainer />}>
                      {children}
                    </Suspense>
                  </DynamicLayout>
                </StoreProvider>
              </ContextProvider>
            </ThemeProvider>
          </IntlProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
