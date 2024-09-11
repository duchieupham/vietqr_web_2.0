import { set } from 'lodash-es';

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
export const HOME_DASHBOARD_PATHS = {
  general: {
    fastFeatures: '/general/fast-features',
    VQRCommunity: {
      qrNewFeeds: '/general/VQR-community/qr-new-feeds',
      news: '/general/VQR-community/news',
      crossSellingItems: '/general/VQR-community/cross-selling-items',
    },
  },
  transaction: '/transaction',
  bankAccount: '/bank-account',
  extensions: '/extensions',
  setting: '/setting',
};
export const AGENT_DASHBOARD_PATHS = {
  businessInformation: {
    agentInformation: '/business-information/agent-information',
    servicesConnect: '/business-information/services-connect',
    promotionPrograms: '/business-information/promotion-programs',
  },
  sales: {
    managementSales: '/sales/sales-management',
    managementRefunds: '/sales/refund-management',
    createOrder: '/sales/create-order',
  },
  statisticalReport: {
    salesStatistics: '/report-statistics/sales-statistics',
    commodityStatistics: '/report-statistics/commodity-statistics',
    customerStatistics: '/report-statistics/customer-statistics',
  },
  storeAndPointOfSale: {
    storeList: '/store-pos/store-list',
    addNewStore: '/store-pos/add-new-store',
  },
  employees: {
    employeeList: '/employees/employee-list',
    addNewEmployee: '/employees/add-new-employee',
  },
  customers: {
    customerList: '/customers/customer-list',
    addNewCustomer: '/customers/add-new-customer',
  },
  products: {
    productList: '/products/product-list',
    addNewProduct: '/products/add-new-product',
    inventoryManagement: '/products/inventory-management',
  },
  support: {
    helpCenter: '/support/help-center',
  },
};

// regex
export const PHONE_REGEX =
  /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g;
export const NUMBER_REGEX = /^[0-9]*$/;
export const PHONE_LENGTH_REGEX = /^\d{10}$/;
export const PASSWORD_LENGTH_REGEX = /^\d{6}$/;

// lang
export const DEFAULT_LANG = 'vi';
export const LANGUAGE_OPTIONS = [
  {
    id: 1,
    label: 'vietnamese',
    value: 'vi',
    circleIcon: '/images/vietnam_circle_flag.svg', // circle flag
    flagIcon: '/images/VN.png', // flag
  },
  {
    id: 2,
    label: 'english',
    value: 'en',
    circleIcon: '/images/us_circle_flag.svg',
    flagIcon: '/images/GB.png',
  },
];

// image
export const VIETQR_IMAGE = '/images/logo.png';
