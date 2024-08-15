import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AuthContextProvider } from '~/contexts/AuthContext';
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
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <AuthContextProvider>
              <DynamicLayout>{children}</DynamicLayout>
            </AuthContextProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
