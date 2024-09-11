// dashboard
export const DASHBOARD_TYPE = [
  {
    id: 'home',
    label: 'home-dashboard',
    path: '/dashboard',
    children: [
      {
        id: 'general',
        label: 'General',
        shortLabel: 'General',
        path: '/dashboard/general',
        icon: '/images/dashboard-home.svg',
        iconActive: '/images/dashboard-home-active.svg',
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
        shortLabel: 'Transaction',
        path: '/dashboard/transaction',
        icon: '/images/clipboard-list.svg',
        iconActive: '/images/clipboard-list-active.svg',
      },
      {
        id: 'bankAccount',
        label: 'Bank Account',
        shortLabel: 'Account',
        path: '/bank-account',
        icon: '/images/money-bank.svg',
        iconActive: '/images/money-bank-active.svg',
      },
      {
        id: 'extensions',
        label: 'Extensions',
        path: '/dashboard/extensions',
        icon: '/images/codes-tags-code-qr.svg',
        iconActive: '/images/codes-tags-code-qr-active.svg',
      },
      {
        id: 'setting',
        label: 'Setting',
        path: '/dashboard/setting',
        icon: '/images/settings-machine.svg',
        iconActive: '/images/settings-machine-active.svg',
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
        shortLabel: 'Business',
        path: '/dashboard/agent/business-information',
        icon: '/images/contact-notebook-note.svg',
        iconActive: '/images/contact-notebook-note-active.svg',
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
        shortLabel: 'Sales',
        path: '/dashboard/agent/sales',
        icon: '/images/shopping-basket.svg',
        iconActive: '/images/shopping-basket-active.svg',
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
        shortLabel: 'Statistical',
        path: '/agent/statistical-report',
        icon: '/images/money-graph-pie-chart.svg',
        iconActive: '/images/money-graph-pie-chart-active.svg',
        children: [
          {
            id: 'salesStatistics',
            label: 'Sales Statistics',
            path: '/statistical-report/sales-statistics',
          },
          {
            id: 'commodityStatistics',
            label: 'Commodity Statistics',
            path: '/statistical-report/commodity-statistics',
          },
          {
            id: 'customerStatistics',
            label: 'Customer Statistics',
            path: '/statistical-report/customer-statistics',
          },
        ],
      },
      {
        id: 'storeAndPointOfSale',
        label: 'Store & Point of Sale',
        shortLabel: 'Store&Point',
        path: '/dashboard/agent/store-pos',
        icon: '/images/shopping-store-factory-building.svg',
        iconActive: '/images/shopping-store-factory-building-active.svg',
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
        path: '/dashboard/agent/employees',
        shortLabel: 'Employees',
        icon: '/images/user-multiple.svg',
        iconActive: '/images/user-multiple-active.svg',
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
        shortLabel: 'Customers',
        path: '/dashboard/agent/customers',
        icon: '/images/user-full-body.svg',
        iconActive: '/images/user-full-body-active.svg',
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
        shortLabel: 'Products',
        path: '/dashboard/agent/products',
        icon: '/images/shopping-bag-hand-bag.svg',
        iconActive: '/images/shopping-bag-hand-bag-active.svg',
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
        shortLabel: 'Support',
        path: '/dashboard/agent/support',
        icon: '/images/help-customer-support.svg',
        iconActive: '/images/help-customer-support-active.svg',
      },
    ],
  },
];
