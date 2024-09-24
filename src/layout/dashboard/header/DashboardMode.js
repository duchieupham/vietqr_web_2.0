import { Box, ListItemButton, ListItemText, styled } from '@mui/material';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  transition: 'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  '&.Mui-selected': {
    alignItems: 'center',
    borderRadius: '20px',
    color: 'transparent',
    position: 'relative',
    display: 'flex',
    transition: 'background 0.3s ease',
    background: 'linear-gradient(to right, #E1EFFF 0%, #E5F9FF 100%)',
    '& .MuiTypography-root': {
      background: 'linear-gradient(to right, #00C6FF 0%, #0072FF 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    },
  },
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'transparent',
  },
  '& .MuiTypography-root': {
    fontSize: '12px',
  },
}));

const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  margin: '0 auto',
  '& .MuiTypography-root': {
    color: '#000000',
  },
}));

export default function DashboardMode() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const handleNavigation = (id, path) => {
    dispatch(setDashboardType(id));
    router.push(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {DASHBOARD_TYPE.map((type) => (
        <ListItemButtonStyled
          key={type.id}
          selected={pathname.includes(type.path)}
          onClick={() => handleNavigation(type.id, type.path)}
          disableRipple
        >
          <ListItemTextStyled disableRipple primary={t(type.label)} />
        </ListItemButtonStyled>
      ))}
    </Box>
  );
}
