import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AuthContextProvider } from '~/contexts/AuthContext';
import StoreProvider from './StoreProvider';
import DynamicLayout from './DynamicLayout';

export const metadata = {
  title: 'VietQR',
  description: '',
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <StoreProvider>
              <DynamicLayout>{children}</DynamicLayout>
            </StoreProvider>
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
