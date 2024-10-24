import { PAGE_PATHS } from '~/constants';

export const NAVBAR_CONFIG = {
  login: {
    id: 1,
    name: 'login',
    items: [
      {
        id: 1,
        name: 'headerHome',
        path: PAGE_PATHS.HOME,
      },
      {
        id: 2,
        name: 'headerQR',
        path: PAGE_PATHS.CREATEQR,
      },
      {
        id: 3,
        name: 'headerServiceConnect',
        path: PAGE_PATHS.SERVICE_CONNECT,
      },
      {
        id: 4,
        name: 'headerLogin',
        path: PAGE_PATHS.LOGIN,
      },
      {
        id: 5,
        name: 'headerRegister',
        path: PAGE_PATHS.REGISTER,
      },
    ],
  },
};
