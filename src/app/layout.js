import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import theme from '~/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ContextProvider from '~/contexts/ContextProvider';
import StoreProvider from './StoreProvider';
import DynamicLayout from './DynamicLayout';
import './globals.css';

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
                  <DynamicLayout>{children}</DynamicLayout>
                </StoreProvider>
              </ContextProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
