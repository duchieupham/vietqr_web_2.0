import { PATH_PAGE } from '~/routes/path';

export const navConfig = [
  {
    id: 1,
    name: 'login',
    items: [
      {
        id: 1,
        name: 'headerHome',
        path: PATH_PAGE.login.home,
      },
      {
        id: 2,
        name: 'headerQR',
        path: PATH_PAGE.login.createQr,
      },
      {
        id: 3,
        name: 'headerServiceConnect',
        path: PATH_PAGE.login.serviceConnect,
      },
      {
        id: 4,
        name: 'headerLogin',
        style: 'nav__links_login',
        path: PATH_PAGE.login.login,
      },
      {
        id: 5,
        name: 'headerRegister',
        path: PATH_PAGE.login.register,
      },
    ],
  },
];
