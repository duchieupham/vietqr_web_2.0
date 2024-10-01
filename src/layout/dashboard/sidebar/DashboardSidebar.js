import { AppBar, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import Breadcrumbs from '~/components/Breadcrumbs';
import { VerticalSidebar } from '~/sections/dashboard/sidebar';
import DashboardHeader from '../header/DashboardHeader';

const DRAWER_WIDTH = 240;
const TOOLBAR_HEIGHT = '64px';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

export default function DashboardSidebar({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(!isMobile);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* desktop */}
      {!isMobile && <VerticalSidebar />}
      <Main open sx={{ width: '100%' }}>
        <AppBar
          open={isOpen}
          sx={{
            backgroundColor: 'white',
            position: 'relative',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            sx={{
              height: TOOLBAR_HEIGHT,
              p: 0,
            }}
          >
            <DashboardHeader />
          </Toolbar>
        </AppBar>
        <Breadcrumbs />
        {children}
      </Main>
    </Box>
  );
}
