import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AppBar, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumbs from '~/components/Breadcrumbs';
import MenuContent from '~/sections/@dashboard/sidebar/MenuContent';
import DashboardHeader from '../header/DashboardHeader';

const drawerWidth = 240;
const drawerWidthCollapsed = 80;
const toolBarHeight = '64px';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
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

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '28px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  zIndex: 1300,
  border: '1px solid #DADADA',
  width: '22px',
  height: '22px',
}));

export default function DashboardSidebar({ children }) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const clickToggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: isOpen ? drawerWidth : drawerWidthCollapsed,
          flexShrink: 0,
          position: 'relative',
          '& .MuiDrawer-paper': {
            width: isOpen ? drawerWidth : drawerWidthCollapsed,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
        variant="permanent"
        anchor="left"
        open={isOpen}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* LOGO */}
          <Box
            sx={{
              padding: '16px',
              textAlign: 'center',
              px: isOpen ? '16px' : '8px',
            }}
          >
            <Image
              src={
                isOpen
                  ? '/images/VietQRLogo.png'
                  : '/images/ic-viet-qr-small-trans.svg'
              }
              width={isOpen ? 97 : 40}
              height={isOpen ? 47 : 39}
              alt="VietQR Logo"
              quality={100}
              priority
            />
          </Box>
          {/* MENU LIST */}
          <MenuContent isDrawerOpen={isOpen} />
        </Box>
      </Drawer>
      {/* DRAWER CLOSE BUTTON */}
      <CloseButton
        onClick={clickToggleDrawer}
        sx={{
          left: isOpen
            ? `${drawerWidth - 12}px`
            : `${drawerWidthCollapsed - 12}px`,
          transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </CloseButton>
      <Main open>
        <AppBar
          open={isOpen}
          sx={{
            backgroundColor: 'white',
            position: 'relative',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ height: toolBarHeight }}>
            <DashboardHeader />
          </Toolbar>
        </AppBar>
        <Container>
          <Breadcrumbs />
          {children}
        </Container>
      </Main>
    </Box>
  );
}
