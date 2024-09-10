// cookie
export const LOCALE_COOKIE = 'LOCALE';
export const AUTH_COOKIE = 'AUTH_TOKEN';

// path
export const PATH_PAGE = {
  login: {
    home: '/',
    createQr: '/create',
    serviceConnect: '/dashboard',
    login: '/login',
    register: '/register',
  },
};
export const DEFAULT_PATH = '/dashboard';
export const PUBLIC_PATHS = ['/', '/login', '/register', '/notice'];

// regex
export const PHONE_REGEX =
  /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g;
export const PHONE_LENGTH_REGEX = /^\d{10}$/;
export const PASSWORD_LENGTH_REGEX = /^\d{6}$/;

// lang
export const DEFAULT_LANG = 'vi';
export const LANGUAGE_OPTIONS = [
  {
    id: 1,
    label: 'vietnamese',
    value: 'vi',
    icon: '/images/vietnam_circle_flag.svg', // circle flag
    icon2: '/images/VN.png', // flag
  },
  {
    id: 2,
    label: 'english',
    value: 'en',
    icon: '/images/us_circle_flag.svg',
    icon2: '/images/GB.png',
  },
];

// image
export const VIETQR_IMAGE = '/images/logo.png';
