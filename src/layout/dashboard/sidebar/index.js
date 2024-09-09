/* eslint-disable no-shadow */
import {
  Box,
  Container,
  Drawer,
  drawerClasses,
  ListItemButton,
  styled,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import MenuContent from '~/sections/@dashboard/sidebar/MenuContent';
import theme from '~/theme';

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <DrawerStyled
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
      >
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
      </DrawerStyled>
    </Container>
  );
}

const drawerWidth = 240;

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));
