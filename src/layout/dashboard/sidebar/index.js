import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import MenuContent from '~/sections/@dashboard/sidebar/MenuContent';
import { AppBar } from '@mui/material';
import DashboardHeader from '../header';

const drawerWidth = 240;
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'flex-end',
  height: 'fit-content',
}));

export default function DashboardSidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* LOGO */}
          <Box sx={{ padding: '16px', textAlign: 'center' }}>
            <Image
              src="/images/VietQRLogo.png"
              width={97}
              height={47}
              alt="VietQR Logo"
              quality={100}
              priority
            />
            {/* CLOSE BUTTON
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: 'absolute',
              top: 25,
              right: -50,
              transform: 'translateX(-50%)',
              zIndex: 50,
            }}
          >
            <Image
              src="/images/close_icon.png"
              width={22}
              height={22}
              quality={100}
              priority
              alt="close_icon.png"
            />
          </IconButton> */}
          </Box>

          {/* MENU LIST */}
          {/* <List component="nav" sx={{ flexGrow: 1 }}>
            <ListItemButtonStyled
              selected={selectedIndex === 0}
              onClick={() => handleListItemClick(0)}
            >
              <ListItemText primary="Tổng quan" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              onClick={() => {
                handleListItemClick(1);
                handleTransactionClick();
              }}
            >
              <ListItemText primary="Quản lý giao dịch" />
              {openTransaction ? <ExpandLess /> : <ExpandMore />}
            </ListItemButtonStyled>
            <Collapse in={openTransaction} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButtonStyled sx={{ pl: 4 }}>
                  <ListItemText primary="GD thanh toán" />
                </ListItemButtonStyled>
                <ListItemButtonStyled sx={{ pl: 4 }}>
                  <ListItemText primary="GD chờ xác nhận" />
                </ListItemButtonStyled>
              </List>
            </Collapse>
            <ListItemButtonStyled
              selected={selectedIndex === 2}
              onClick={() => handleListItemClick(2)}
            >
              <ListItemText primary="Tiện ích QR" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              selected={selectedIndex === 3}
              onClick={() => handleListItemClick(3)}
            >
              <ListItemText primary="Tích hợp và kết nối" />
            </ListItemButtonStyled>
            <ListItemButtonStyled
              selected={selectedIndex === 4}
              onClick={() => handleListItemClick(4)}
            >
              <ListItemText primary="Liên hệ với chúng tôi" />
            </ListItemButtonStyled>
          </List> */}
          <MenuContent />
        </Box>
      </Drawer>
      <Main open={open}>
        <AppBar
          open={open}
          sx={{
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          <Toolbar sx={{ height: toolBarHeight }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                  color: '#000',
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <DashboardHeader />
          </Toolbar>
        </AppBar>
        <Box>{children}</Box>
      </Main>
    </Box>
  );
}
