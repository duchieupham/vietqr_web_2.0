import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Hamburger from 'hamburger-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Profile from '~/components/Profile';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAuthContext } from '~/contexts/AuthContext';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';
import theme from '~/theme';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

const drawerWidth = 240;
const drawerWidthCollapsed = 0;

const DrawerStyled = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    top: '60px',
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
    color: '#fff',
  },
}));

const drawerContent = (dashboardType, onChangeDashboardType) => {
  const { session } = useAuthContext();

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
      spacing={2}
    >
      <Box sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
        <Profile />
        <Typography variant="h6" align="center">
          {`${session?.firstName} ${session?.lastName}`}
        </Typography>
      </Box>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="dashboard type button group"
      >
        {DASHBOARD_TYPE.map((type) => (
          <Button key={type.id} value={type.id} onClick={onChangeDashboardType}>
            {type.label}
          </Button>
        ))}
      </ButtonGroup>
      <Box>
        <List dense>
          {displayedType &&
            displayedType.children.map((child) => (
              <ListItem key={child.id}>
                <ListItemText
                  primary={child.label}
                  primaryTypographyProps={{ sx: { color: 'black' } }}
                />
              </ListItem>
            ))}
        </List>
      </Box>
    </Stack>
  );
};

export default function DashboardHeader() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const { dashboardType } = useAppSelector((store) => store.app);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerMobileOpen, setIsDrawerMobileOpen] = useState(false);

  const dispatch = useAppDispatch();

  const onChangeDashboardType = (event) => {
    const foundType = DASHBOARD_TYPE.find(
      (type) => type.id === event.target.value,
    );
    const { id, children } = foundType;

    // dispatch(setDashboardType(id));
    router.push(children[0].path); // TO BE IMPROVED
  };

  const onClickToggleDrawerMobile = () => {
    setIsDrawerMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const foundType = DASHBOARD_TYPE.find((type) =>
      pathname.includes(type.path),
    );
    if (foundType) {
      dispatch(setDashboardType(foundType?.id));
    }
  }, [pathname]);

  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 0.5, SmartButton: 1.5 }}
    >
      {!isMobile ? (
        <Select
          value={dashboardType}
          onChange={onChangeDashboardType}
          MenuProps={{
            PaperProps: {
              sx: {
                '& .MuiMenu-list': {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              },
            },
          }}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '.MuiSelect-icon': {
              color: 'inherit',
            },
            fontSize: {
              xs: '12px',
              md: '15px',
            },
            '.MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
            '& .MuiList-root-MuiMenu-list': {
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
        >
          {DASHBOARD_TYPE.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              <Typography sx={{ fontWeight: 'bold' }}>
                {t(type.label)}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      ) : (
        <>
          <IconButton
            onClick={onClickToggleDrawerMobile}
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              p: 0,
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
      )}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <LanguagePopover />
        <NotificationPopover />
        {!isMobile && <AccountPopover />}
      </Box>
    </Stack>
  );
}
