import {
  Box,
  Button,
  List,
  ListItemButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppSelector } from '~/redux/hook';

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  height: 50,
  margin: '0 1.5rem',
  px: 1.5,
  backgroundColor: theme.palette.lily.white.linear,
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  '& .MuiTypography-root': {
    fontSize: '12px',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'transparent',
  },
  '&.Mui-selected': {
    background: 'linear-gradient(to right, #E1EFFF 0%, #E1EFFF 100%)',
    color: '#0072FF',
    fontSize: 13,
    fontWeight: 'semiBold',
    '& .MuiListItemIcon-root': {
      color: '#0072FF',
    },
  },
}));

export default function HorizontalSidebar() {
  const { dashboardType } = useAppSelector((state) => state.app);
  const t = useTranslations();
  const pathname = usePathname();

  const displayedTypes = DASHBOARD_TYPE.find(
    (type) => type.id === dashboardType,
  );

  return (
    <PageWrapper>
      {/* dashboard */}
      <Stack sx={{ flexDirection: 'row', gap: 2 }}>
        {displayedTypes.children.map((type) => (
          <ListItemButtonStyled
            key={type.id}
            disableRipple
            selected={pathname.includes(type.path)}
          >
            <Typography>{t(type.label)}</Typography>
          </ListItemButtonStyled>
        ))}
      </Stack>
    </PageWrapper>
  );
}
