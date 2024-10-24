'use client';

import { NextIntlClientProvider } from 'next-intl';

const IntlProvider = ({ messages, children, ...props }) => (
  <NextIntlClientProvider
    messages={messages}
    onError={(e) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Translate error', e);
        return;
      }
      console.log('Translate error');
    }}
    {...props}
  >
    {children}
  </NextIntlClientProvider>
);

export default IntlProvider;
