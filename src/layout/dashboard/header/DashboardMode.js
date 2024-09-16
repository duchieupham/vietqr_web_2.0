import { Box, ListItemButton, ListItemText, styled } from '@mui/material';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';

const ListItemButtonStyled = styled(ListItemButton)(() => ({
  borderRadius: '8px',
  transition: 'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
  color: '#000000',
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  '&.Mui-selected': {
    alignItems: 'center',
    color: '#00c6ff',
    background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    display: 'flex',
    transition: 'color 0.3s ease, background 0.3s ease',
  },
  '&:hover': {
    background:
      'linear-gradient(90deg, rgba(0,198,255,0.7), rgba(0,114,255,1.0))',
    textDecoration: 'none',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  '&.Mui-selected:after': {
    content: '""',
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    width: '75%',
    height: '2px',
    background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
    zIndex: 1,
    transition: 'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '& .MuiTypography-root': {
    fontSize: '12px',
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
          <ListItemText primary={t(type.label)} />
        </ListItemButtonStyled>
      ))}
    </Box>
  );
}
