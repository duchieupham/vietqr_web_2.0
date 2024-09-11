// dashboard
export const DASHBOARD_TYPE = [
  {
    id: 'home',
    label: 'home-dashboard',
    path: '/dashboard/home',
    children: [
      {
        id: 'general',
        label: 'General',
        path: '/',
        children: [
          {
            id: 'qrNewFeeds',
            label: 'QR New Feeds',
            path: '/general/qr-new-feeds',
          },
          {
            id: 'news',
            label: 'News',
            path: '/general/news',
          },
          {
            id: 'crossSellingItems',
            label: 'Cross-Selling Items',
            path: '/general/cross-selling-items',
          },
        ],
      },
      {
        id: 'transaction',
        label: 'Transaction Management',
        path: '/transaction',
      },
      {
        id: 'bankAccount',
        label: 'Bank Account',
        path: '/bank-account',
      },
      {
        id: 'extensions',
        label: 'Extensions',
        path: '/extensions',
      },
      {
        id: 'setting',
        label: 'Setting',
        path: '/setting',
      },
    ],
  },
  {
    id: 'agent',
    label: 'agent-dashboard',
    path: '/dashboard/agent',
    children: [
      {
        id: 'businessInformation',
        label: 'Business Information',
        path: '/businessInformation',
        children: [
          {
            id: 'agentInformation',
            label: 'Agent Information',
            path: '/business-information/agent-information',
          },
          {
            id: 'servicesConnect',
            label: 'Services Connect',
            path: '/business-information/services-connect',
          },
          {
            id: 'promotionPrograms',
            label: 'Promotion Programs',
            path: '/business-information/promotion-programs',
          },
        ],
      },
      {
        id: 'sales',
        label: 'Sales Management',
        path: '/sales',
        children: [
          {
            id: 'managementSales',
            label: 'Sales Management',
            path: '/sales/sales-management',
          },
          {
            id: 'managementRefunds',
            label: 'Refund Management',
            path: '/sales/refund-management',
          },
          {
            id: 'createOrder',
            label: 'Create Order',
            path: '/sales/create-order',
          },
        ],
      },
      {
        id: 'statisticalReport',
        label: 'Statistical Report',
        path: '/statistical-report',
        children: [
          {
            id: 'salesStatistics',
            label: 'Sales Statistics',
            path: '/report-statistics/sales-statistics',
          },
          {
            id: 'commodityStatistics',
            label: 'Commodity Statistics',
            path: '/report-statistics/commodity-statistics',
          },
          {
            id: 'customerStatistics',
            label: 'Customer Statistics',
            path: '/report-statistics/customer-statistics',
          },
        ],
      },
      {
        id: 'storeAndPointOfSale',
        label: 'Store & Point of Sale',
        path: '/store-pos',
        children: [
          {
            id: 'storeList',
            label: 'Store List',
            path: '/store-pos/store-list',
          },
          {
            id: 'addNewStore',
            label: 'Add New Store',
            path: '/store-pos/add-new-store',
          },
        ],
      },
      {
        id: 'employees',
        label: 'Employees',
        path: '/employees',
        children: [
          {
            id: 'employeeList',
            label: 'Employee List',
            path: '/employees/employee-list',
          },
          {
            id: 'addNewEmployee',
            label: 'Add New Employee',
            path: '/employees/add-new-employee',
          },
        ],
      },
      {
        id: 'customers',
        label: 'Customers',
        path: '/customers',
        children: [
          {
            id: 'customerList',
            label: 'Customer List',
            path: '/customers/customer-list',
          },
          {
            id: 'addNewCustomer',
            label: 'Add New Customer',
            path: '/customers/add-new-customer',
          },
        ],
      },
      {
        id: 'products',
        label: 'Products',
        path: '/products',
        children: [
          {
            id: 'productList',
            label: 'Product List',
            path: '/products/product-list',
          },
          {
            id: 'addNewProduct',
            label: 'Add New Product',
            path: '/products/add-new-product',
          },
          {
            id: 'inventoryManagement',
            label: 'Inventory Management',
            path: '/products/inventory-management',
          },
        ],
      },
      {
        id: 'support',
        label: 'Support',
        path: '/support',
      },
    ],
  },
];
