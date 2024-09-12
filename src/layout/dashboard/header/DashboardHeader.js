import {
  Box,
  ButtonGroup,
  Drawer,
  IconButton,
  List,
  ListItemButton,
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
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ButtonGradient } from '~/components/button';
import Profile from '~/components/Profile';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';
import theme from '~/theme';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationPopover from './NotificationPopover';

const drawerWidth = 250;
const drawerWidthCollapsed = 0;

const DrawerStyled = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    top: '0',
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
    '& .MuiListItemIcon-root': {
      color: '#0072FF',
    },
  },
  '&:hover': {
    background: '#DADADA',
    opacity: 1,
  },
}));

const drawerContent = (dashboardType, onChangeDashboardType, t) => {
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
        pt: 1.3,
      }}
      spacing={2}
    >
      <IconButton
        sx={{
          p: '2px',
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
      <ButtonGroup
        disableElevation
        // variant="contained"
        aria-label="dashboard type button group"
      >
        {DASHBOARD_TYPE.map((type) => (
          <ButtonGradient
            key={type.id}
            value={type.id}
            onClick={onChangeDashboardType}
            style={{
              background: dashboardType.includes(type.id)
                ? 'linear-gradient(to right, #00C6FF 0%, #0072FF 100%)'
                : 'linear-gradient(to right, #E1EFFF, #E5F9FF)',
              color: dashboardType.includes(type.id) ? '#FFFFFF' : '#DADADA',
              height: 50,
              fontSize: 13,
              whiteSpace: 'nowrap',
            }}
          >
            {t(type.label)}
          </ButtonGradient>
        ))}
      </ButtonGroup>
      <Box>
        <List dense disablePadding>
          {displayedType &&
            displayedType.children.map((child) => (
              <ListItemButtonStyled
                key={child.id}
                selected={pathname.includes(child.path)}
                onClick={() => router.push(child.path)}
              >
                <ListItemText primary={child.label} />
              </ListItemButtonStyled>
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
  const dispatch = useAppDispatch();
  const prevDashboardTypeRef = useRef();

  const [isDrawerMobileOpen, setIsDrawerMobileOpen] = useState(false);

  useEffect(() => {
    prevDashboardTypeRef.current = dashboardType;
  }, [dashboardType]);

  const onClickToggleDrawerMobile = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerMobileOpen(!isDrawerMobileOpen);
  };

  const onChangeDashboardType = (event) => {
    const foundType = DASHBOARD_TYPE.find(
      (type) => type.id === event.target.value,
    );

    if (foundType) {
      const { id, children } = foundType;
      const prevDashboardType = prevDashboardTypeRef.current;

      if (prevDashboardType !== id) {
        dispatch(setDashboardType(id));

        if (children && children.length > 0) {
          router.push(children[0].path); // Navigate to first child
        }
      }
    }
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
            {drawerContent(dashboardType, onChangeDashboardType, t)}
          </DrawerStyled>
        </>
      ) : (
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
      )}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <LanguagePopover />
        <NotificationPopover />
        {!isMobile && <AccountPopover />}
      </Box>
    </Stack>
  );
}
