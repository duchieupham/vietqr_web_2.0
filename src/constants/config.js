// API
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// Metadata
export const METADATA = {
  title: {
    default: 'VietQR',
    template: '%s | VietQR',
  },
  description: 'VietQR for User & Agency',
  keywords: ['VietQR', 'Quản lý', 'Tạo mã QR', 'Đại lý'],
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/logo.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'VietQR',
    description: 'VietQR for User & Agency',
    url: 'https://pro.vietqr.vn',
    siteName: 'VietQR Home',
    images: [
      {
        url: 'https://pro.vietqr.vn/images/VietQRLogo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'vi-VN',
    type: 'website',
  },

  // Alternate
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      vi: '/vi',
    },
  },

  // Other
  applicationName: 'VietQR for User & Agency',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'VietQR Devs', url: '' }],
  creator: 'VietQR Devs (MinhDT)',
  publisher: 'VietQR Devs (KienNH)',
};
