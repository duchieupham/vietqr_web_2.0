import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { getLocale, getMessages } from 'next-intl/server';
import ContextProvider from '~/contexts/ContextProvider';
import { IntlProvider, ReduxStoreProvider } from '~/providers';
import theme from '~/theme';
import DynamicLayout from './DynamicLayout';
import './globals.css';

export const metadata = {
  title: 'VietQR',
  description: 'VietQR Admin Pro',
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
              <ReduxStoreProvider>
                <ContextProvider>
                  <DynamicLayout>{children}</DynamicLayout>
                </ContextProvider>
              </ReduxStoreProvider>
            </ThemeProvider>
          </IntlProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
