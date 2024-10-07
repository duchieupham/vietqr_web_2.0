/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Hamburger from 'hamburger-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Breadcrumbs from '~/components/Breadcrumbs';
import ContactLangButton from '~/components/ContactLangButton';
import VietQRLogo from '~/components/VietQRLogo';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';
import SearchBar from '../../../components/SearchBar';
import AccountPopover from './AccountPopover';
import NotificationPopover from './NotificationPopover';
import DashboardMode, { DASHBOARD_MODE } from './DashboardMode';

const DRAWER_WIDTH = 250;
const DRAWER_WIDTH_COLLAPSED = 0;

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    paddingLeft: '4px',
    width: DRAWER_WIDTH,
    top: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
    transition: 'width 300ms ease-in-out, background 300ms ease-in-out',
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    color: 'black',
  },
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
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
    background: theme.palette.lily.white.linear,
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
  const { dashboardType, dashboardMode } = useAppSelector((store) => store.app);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isDrawerMobileOpen, setIsDrawerMobileOpen] = useState(false);

  const onClickDrawerMobile = () => {
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
      {/* Left section */}
      {isMobile ? (
        // Mobile
        <Box sx={{ display: 'flex' }}>
          <IconButton
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
            onClose={onClickDrawerMobile}
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
      ) : // Desktop
      dashboardMode === DASHBOARD_MODE.HORIZONTAL ? (
        <Box display="flex" gap={1}>
          <VietQRLogo />
          <DashboardMode />
        </Box>
      ) : (
        <Breadcrumbs />
      )}
      {/* Right section */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Search bar only on DESKTOP */}
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
        {/* Common actions for both MOBILE and DESKTOP */}
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
