import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import DashboardMode from '~/layout/dashboard/header/DashboardMode';
import { useAppSelector } from '~/redux/hook';

const DRAWER_WIDTH = 250;
const DRAWER_WIDTH_COLLAPSED = 70;

export default function VerticalSidebar() {
  const { dashboardType } = useAppSelector((store) => store.app);
  const displayedType = DASHBOARD_TYPE.find(
    (item) => item.id === dashboardType,
  );
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <DrawerStyled variant="permanent" anchor="left" open={isOpen}>
      <StackStyled>
        <Box
          sx={{
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
            paddingX: '16px',
            paddingTop: '16px',
            justifyContent: 'space-between',
          }}
        >
          <Image
            src="/images/Logo_min.png"
            width={58}
            height={24}
            priority
            quality={100}
            alt="VietQR Logo"
          />
          <DashboardMode mode="vertical" />
        </Box>
        <List dense disablePadding>
          {displayedType.children.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButtonStyled selected={pathname.includes(item.path)}>
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: '10px',
                      md: '12px',
                    },
                    color: '#666A72',
                  }}
                >
                  {t(item.label)}
                </Typography>
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
      </StackStyled>
    </DrawerStyled>
  );
}

const DrawerStyled = styled(Drawer)(({ theme, open }) => ({
  width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
  // flexShrink: 0,
  position: 'relative',
  '& .MuiDrawer-paper': {
    width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  p: 1,
  justifyContent: 'space-between',
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: {
      xs: '10px',
      md: '12px',
    },
    color: '#000000',
    height: '40px',
    alignItems: 'center',
    display: 'flex',
  },
  '&.Mui-selected': {
    alignItems: 'center',
    color: 'transparent',
    position: 'relative',
    display: 'flex',
    transition: 'background 0.3s ease',
    background: theme.palette.lily.white.linear,
    '& .MuiTypography-root': {
      background: theme.palette.bright.blue.linear,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '3px',
      height: '100%',
      background: theme.palette.bright.blue.linear,
      right: 0,
    },
  },
}));
