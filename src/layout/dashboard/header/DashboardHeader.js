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
  useTheme,
} from '@mui/material';
import Hamburger from 'hamburger-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';
import ContactLangButton from '~/components/ContactLangButton';
import VietQRLogo from '~/components/VietQRLogo';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';
import SearchBar from '../../../components/SearchBar';
import AccountPopover from './AccountPopover';
import DashboardMode, { DASHBOARD_MODE } from './DashboardMode';
import NotificationPopover from './NotificationPopover';

const DRAWER_WIDTH = 250;
const DRAWER_WIDTH_COLLAPSED = 0;

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    top: 44,
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition:
      'width 300ms ease-in-out, background 300ms ease-in-out, backdrop-filter 300ms ease-in-out',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(90px)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
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

const DrawerContent = ({ dashboardType }) => {
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 1,
        }}
      >
        <AccountPopover />
      </Box>
      <DashboardMode mode={DASHBOARD_MODE.VERTICAL} />
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
  const { dashboardType } = useAppSelector((store) => store.app);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 0.5 }}
    >
      {isMobile ? (
        // Mobile
        <Box sx={{ display: 'flex' }}>
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
          <VietQRLogo />
          <DrawerStyled
            anchor="left"
            open={isDrawerMobileOpen}
            onClose={onClickToggleDrawerMobile}
            variant="persistent"
            sx={{
              '& .MuiDrawer-paper': {
                width: isDrawerMobileOpen
                  ? DRAWER_WIDTH
                  : DRAWER_WIDTH_COLLAPSED,
              },
            }}
          >
            <DrawerContent dashboardType={dashboardType} />
          </DrawerStyled>
        </Box>
      ) : (
        // Desktop
        <Box display="flex" gap={1}>
          <VietQRLogo />
          <DashboardMode />
        </Box>
      )}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {!isMobile && (
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '38rem',
              },
              position: 'relative',
            }}
          >
            <SearchBar />
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 0.2 }}>
          {!isMobile && <AccountPopover />}
          <NotificationPopover />
          <ContactLangButton
            type="dashboard"
            style={{
              '& .MuiSelect-select': {
                fontSize: 10,
                py: 0,
              },
              '& .MuiInputBase-root': {
                background: '#F0F4FA',
              },
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
}
