import {
  Box,
  Fade,
  ListItemButton,
  Popper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
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
  gap: '5px',
  '& .MuiTypography-root': {
    fontSize: '12px',
  },
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'transparent',
  },
  '&.Mui-selected': {
    color: '#0072FF',
    background: theme.palette.bright.blue.linear,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      height: 2,
      background: theme.palette.bright.blue.linear,
    },
  },
}));

export default function HorizontalSidebar() {
  const { dashboardType } = useAppSelector((state) => state.app);
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const displayedTypes = DASHBOARD_TYPE.find(
    (type) => type.id === dashboardType,
  );

  const handleNavigation = (path) => {
    router.push(path);
  };

  const onClickOpenPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <PageWrapper>
      {/* dashboard */}
      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
        {displayedTypes.children.map((type) => (
          <ListItemButtonStyled
            key={type.id}
            disableRipple
            selected={pathname.includes(type.path)}
            onClick={() => handleNavigation(type.path)}
          >
            <Image src={type.icon} width={20} height={20} alt="icon" />
            <Typography onClick={onClickOpenPopper}>{t(type.label)}</Typography>
            <Popper open={open} anchorEl={anchorEl}>
              <Box>
                {type.children.map((child) => (
                  <ListItemButtonStyled
                    key={child.id}
                    disableRipple
                    selected={pathname.includes(child.path)}
                    onClick={() => handleNavigation(child.path)}
                  >
                    <Typography>{t(child.label)}</Typography>
                  </ListItemButtonStyled>
                ))}
              </Box>
            </Popper>
          </ListItemButtonStyled>
        ))}
      </Stack>
    </PageWrapper>
  );
}
