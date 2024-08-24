import { Box } from '@mui/material';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      {children}
    </Box>
  );
}
