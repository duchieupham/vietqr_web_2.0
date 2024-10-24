'use client';

import DashboardSidebar from './sidebar/DashboardSidebar';

export default function DashboardLayout({ children }) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}
