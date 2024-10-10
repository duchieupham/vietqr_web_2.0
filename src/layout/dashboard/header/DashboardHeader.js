/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import Hamburger from 'hamburger-react';
import Breadcrumbs from '~/components/Breadcrumbs';
import ContactLangButton from '~/components/ContactLangButton';
import VietQRLogo from '~/components/VietQRLogo';
import { DASHBOARD_MODE } from '~/constants/dashboard';
import { Z_INDEX } from '~/constants/styles';
import { useAppSelector } from '~/redux/hook';
import DrawerMobile from '~/sections/dashboard/sidebar/DrawerMobile';
import SearchBar from '../../../components/SearchBar';
import AccountPopover from './AccountPopover';
import DashboardMode from './DashboardMode';
import NotificationPopover from './NotificationPopover';

export default function DashboardHeader({ isOpen, onClick }) {
  const { dashboardMode } = useAppSelector((store) => store.app);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              zIndex: Z_INDEX.DRAWER + 1,
            }}
          >
            <Hamburger toggled={isOpen} toggle={onClick} size={20} />
          </IconButton>
          <VietQRLogo />
          <DrawerMobile isOpen={isOpen} onClose={onClick} />
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Search bar only on DESKTOP */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              width: 'inherit',
              height: '40px',
              justifyContent: 'flex-end',
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
