import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { DASHBOARD_TYPE } from '~/constants/dashboard';
import DashboardMode, {
  DASHBOARD_MODE,
} from '~/layout/dashboard/header/DashboardMode';
import { useAppDispatch, useAppSelector } from '~/redux/hook';
import { setDashboardType } from '~/redux/slices/appSlice';

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
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(true);

  const otherItems = useMemo(
    () => displayedType.children.filter((item) => item.label !== 'Setting'),
    [displayedType],
  );
  const settingsItem = useMemo(
    () => displayedType.children.find((item) => item.label === 'Setting'),
    [displayedType],
  );

  useEffect(() => {
    const foundType = DASHBOARD_TYPE.find((type) =>
      pathname.includes(type.path),
    );
    if (foundType) {
      dispatch(setDashboardType(foundType?.id));
    }
  }, [pathname]);

  return (
    <Box sx={{ position: 'relative' }}>
      <DrawerStyled variant="permanent" anchor="left" open={isOpen}>
        <Stack
          sx={{
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              padding: '32px 16px 56px',
              justifyContent: 'space-between',
              cursor: 'pointer',
            }}
          >
            <Image
              src={
                isOpen
                  ? '/images/Logo_min.png'
                  : '/images/ic-viet-qr-small-trans.svg'
              } 
              width={58}
              height={24}
              priority
              quality={100}
              alt="VietQR Logo"
              onClick={() => router.push('/')}
            />
            {isOpen && <DashboardMode mode={DASHBOARD_MODE.VERTICAL} />}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <List dense disablePadding>
              {otherItems.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ paddingBottom: '8px' }}
                >
                  {item.children.length > 0 ? (
                    <Box>
                      {/* Parent Item */}
                      {isOpen && (
                        <Typography
                          sx={{
                            fontSize: {
                              xs: '10px',
                              md: '12px',
                            },
                            color: theme.palette.slateGray,
                            alignItems: 'end',
                            padding: '0 0 12px 16px',
                          }}
                        >
                          {t(item.label)}
                        </Typography>
                      )}
                      {/* Nested Children List */}
                      <List disablePadding>
                        {item.children.map((child) => (
                          <ListItem key={child.id} disablePadding>
                            <ListItemButtonStyled
                              selected={pathname.includes(child.path)}
                              disableRipple
                              sx={{
                                paddingLeft: '18px',
                              }}
                              onClick={() => router.push(child.path)}
                            >
                              <Box sx={{ display: 'flex' }}>
                                <Image
                                  src={child.icon || '/icons/star-gradient.svg'}
                                  width={30}
                                  height={30}
                                  alt="icon"
                                />
                                {isOpen && (
                                  <Typography
                                    sx={{
                                      fontSize: {
                                        xs: '10px',
                                        md: '12px',
                                      },
                                    }}
                                  >
                                    {t(child.label)}
                                  </Typography>
                                )}
                              </Box>
                            </ListItemButtonStyled>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ) : (
                    <ListItemButtonStyled
                      selected={pathname.includes(item.path)}
                      disableRipple
                      onClick={() => router.push(item.path)}
                    >
                      {isOpen ? (
                        <Typography
                          sx={{
                            fontSize: {
                              xs: '10px',
                              md: '12px',
                            },
                            color: theme.palette.slateGray,
                          }}
                        >
                          {t(item.label)}
                        </Typography>
                      ) : (
                        <Image
                          width={20}
                          height={20}
                          alt="icon"
                          src={item.icon}
                        />
                      )}
                    </ListItemButtonStyled>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
        <Box>
          <List dense disablePadding>
            {settingsItem && (
              <ListItem disablePadding>
                <ListItemButtonStyled
                  selected={pathname.includes(settingsItem.path)}
                  disableRipple
                  onClick={() => router.push(settingsItem.path)}
                >
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src={settingsItem.icon}
                      width={30}
                      height={30}
                      alt="icon"
                    />
                    {isOpen && (
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '10px',
                            md: '12px',
                          },
                          color: theme.palette.slateGray,
                          alignItems: 'center',
                          paddingBottom: '4px',
                        }}
                      >
                        {t(settingsItem.label)}
                      </Typography>
                    )}
                  </Box>
                </ListItemButtonStyled>
              </ListItem>
            )}
          </List>
        </Box>
      </DrawerStyled>
      {/* Close button */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1300,
          border: '1px solid #DADADA',
          borderRadius: '50%',
          background: 'white',
          right: '-15px', // Adjusting position based on the drawer state
          top: '15px',
          transition: 'right 0.3s ease',
          cursor: 'pointer',
          width: '30px',
          height: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={isOpen ? '/icons/close-icon.svg' : '/icons/open-icon.svg'}
          width={20}
          height={20}
          alt="arrow"
        />
      </Box>
    </Box>
  );
}

const DrawerStyled = styled(Drawer)(({ theme, open }) => ({
  width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
  flexShrink: 0,
  position: 'relative',
  '& .MuiDrawer-paper': {
    width: open ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: 'width 0.3s ease',
    '::-webkit-scrollbar': {
      width: '1px',
    },
  },
}));

const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingTop: '0',
  paddingBottom: '0',
  width: '250px',
  '& .MuiTypography-root': {
    height: '40px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
  },
  '&.Mui-selected': {
    alignItems: 'flex-start',
    color: 'transparent',
    position: 'relative',
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
  '&:hover': {
    background: 'none',
  },
}));
