'use client';

import { Box } from '@mui/material';
import DashboardHeader from './header';
import DashboardSidebar from './sidebar';

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
