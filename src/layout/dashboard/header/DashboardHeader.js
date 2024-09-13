'use client';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Hamburger from 'hamburger-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import ContactLangButton from '~/components/ContactLangButton';
import Profile from '~/components/Profile';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';
import theme from '~/theme';
import AccountPopover from './AccountPopover';
import DashboardMode from './DashboardMode';
import NotificationPopover from './NotificationPopover';

const drawerWidth = 250;
const drawerWidthCollapsed = 0;

const DrawerStyled = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    top: 50,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: theme.transitions.create(
      ['width', 'background', 'backdrop-filter'],
      {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      },
    ),
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'black',
  },
}));

const ListItemButtonStyled = styled(ListItemButton)(() => ({
  '&.Mui-selected': {
    background: 'linear-gradient(to right, #E1EFFF 0%, #E1EFFF 100%)',
    color: '#0072FF',
    fontSize: 13,
    fontWeight: 'semiBold',
    borderRadius: 8,
    '& .MuiListItemIcon-root': {
      color: '#0072FF',
    },
  },
  '&:hover': {
    background: '#DADADA',
    opacity: 1,
  },
}));

const drawerContent = (dashboardType, onChangeDashboardType) => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const displayedType = DASHBOARD_TYPE.find(
    (item) => item.id === dashboardType,
  );

  return (
    <Stack
      role="presentation"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: 240,
      }}
      spacing={1}
    >
      <IconButton
        sx={{
          pr: 2,
          justifyContent: 'flex-end',
          border: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
        disableRipple
      >
        <Profile />
      </IconButton>
      <DashboardMode />
      <Box>
        <List dense disablePadding>
          {displayedType &&
            displayedType.children.map((child) => (
              <ListItemButtonStyled
                key={child.id}
                selected={pathname.includes(child.path)}
                onClick={() => router.push(child.path)}
              >
                <ListItemText primary={t(child.label)} />
              </ListItemButtonStyled>
            ))}
        </List>
      </Box>
    </Stack>
  );
};

export default function DashboardHeader() {
  const router = useRouter();
  const { dashboardType } = useAppSelector((store) => store.app);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  const [isDrawerMobileOpen, setIsDrawerMobileOpen] = useState(false);

  const onClickToggleDrawerMobile = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerMobileOpen((prev) => !prev);
  };

  const onChangeDashboardType = (event) => {
    const foundType = DASHBOARD_TYPE.find(
      (type) => type.id === event.target.value,
    );

    if (foundType) {
      const { id, children } = foundType;

      if (dashboardType !== id) {
        dispatch(setDashboardType(id));

        if (children && children.length > 0) {
          router.push(children[0].path); // Navigate to first child
        }
      }
    }
  };

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 0.5, SmartButton: 1.5 }}
    >
      {isMobile ? (
        <>
          <IconButton
            onClick={onClickToggleDrawerMobile}
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              p: 0,
              zIndex: 1300,
            }}
          >
            <Hamburger
              toggled={isDrawerMobileOpen}
              toggle={setIsDrawerMobileOpen}
              size={20}
            />
          </IconButton>
          <Box
            onClick={() => router.push('/')}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pl: 5,
            }}
          >
            <Image
              src="/images/VietQRLogo.png"
              width={97}
              height={47}
              alt="VietQR Logo"
              quality={100}
              priority
            />
          </Box>
          <DrawerStyled
            anchor="left"
            open={isDrawerMobileOpen}
            onClose={onClickToggleDrawerMobile}
            variant="persistent"
            sx={{
              '& .MuiDrawer-paper': {
                width: isDrawerMobileOpen ? drawerWidth : drawerWidthCollapsed,
              },
            }}
          >
            {drawerContent(dashboardType, onChangeDashboardType)}
          </DrawerStyled>
        </>
      ) : (
        <DashboardMode />
      )}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <ContactLangButton type="dashboard" />
        {!isMobile && <AccountPopover />}
        <NotificationPopover />
      </Box>
    </Stack>
  );
}
