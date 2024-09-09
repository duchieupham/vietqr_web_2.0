'use client';

import { Box } from '@mui/material';
import DashboardHeader from './header/DashboardHeader';
import DashboardSidebar from './sidebar/DashboardSidebar';

export default function DashboardLayout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: 1,
      }}
    >
      <DashboardHeader />
      <DashboardSidebar />
      {children}
    </Box>
  );
}
