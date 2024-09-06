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
export const phoneRegex =
  /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g;
export const phoneLengthRegex = /^\d{10}$/;
export const passwordLengthRegex = /^\d{6}$/;

// lang
export const DEFAULT_LANG = 'vi';
