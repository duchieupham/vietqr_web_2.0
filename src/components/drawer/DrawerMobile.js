import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import AccountPopover from '~/layout/dashboard/header/AccountPopover';
import DashboardMode, {
  DASHBOARD_MODE,
} from '~/layout/dashboard/header/DashboardMode';
import { useAppSelector } from '~/redux/hook';

const DRAWER_WIDTH = 250;
const DRAWER_WIDTH_COLLAPSED = 0;

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
export default function DrawerMobile({ isOpen, setIsOpen }) {
  const { dashboardType } = useAppSelector((store) => store.app);

  return (
    <DrawerStyled
      anchor="left"
      open={isOpen}
      onClose={setIsOpen}
      sx={{
        '& .MuiDrawer-paper': {
          width: isOpen ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
        },
      }}
    >
      <DrawerContent dashboardType={dashboardType} />
    </DrawerStyled>
  );
}
