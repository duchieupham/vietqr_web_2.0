/* eslint-disable no-restricted-syntax */
import { Box, ListItemButton, ListItemText, styled } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import { useAppDispatch } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';

export const DASHBOARD_MODE = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

const ListItemButtonStyled = styled(ListItemButton)(({ theme, mode }) => ({
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
    background: theme.palette.lily.white.linear,
    ...(mode === DASHBOARD_MODE.VERTICAL && {
      width: '40px',
      height: '40px',
    }),
    '& .MuiTypography-root': {
      background: theme.palette.bright.blue.linear,
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

export default function DashboardMode({ mode = DASHBOARD_MODE.HORIZONTAL }) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  // TODO: Navigate to the first child of the selected dashboard type
  const handleNavigation = (id, children = []) => {
    dispatch(setDashboardType(id));
    const findFirstChildPath = (childList) => {
      for (const child of childList) {
        if (child.path && (!child.children || child.children.length === 0)) {
          return child.path;
        }
        if (child.children && child.children.length > 0) {
          const result = findFirstChildPath(child.children);
          if (result) {
            return result;
          }
        }
      }
      return null;
    };
    if (children.length > 0) {
      const firstChildPath = findFirstChildPath(children);
      if (firstChildPath) router.push(firstChildPath);
    }
  };

  // Check the path to determine the dashboard type
  useEffect(() => {
    const foundType = DASHBOARD_TYPE.find((type) =>
      pathname.includes(type.path),
    );
    if (foundType) {
      dispatch(setDashboardType(foundType?.id));
    }
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      {DASHBOARD_TYPE.map((type) => (
        <ListItemButtonStyled
          key={type.id}
          selected={pathname.includes(type.path)}
          onClick={() => handleNavigation(type.id, type.children)}
          mode={mode}
        >
          {mode === DASHBOARD_MODE.HORIZONTAL ? (
            <ListItemTextStyled primary={t(type.label)} />
          ) : (
            <Image src={type.icon} width={30} height={30} alt="icon" />
          )}
        </ListItemButtonStyled>
      ))}
    </Box>
  );
}
