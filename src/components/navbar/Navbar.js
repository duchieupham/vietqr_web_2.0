// eslint-disable-next-line object-curly-newline
// mui
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
} from '@mui/material';
// constants
import { LOCALE_COOKIE } from '~/constants';
import AppImages from '~/constants/ImagesConstant';
// contexts
import { useAppContext } from '~/contexts/AppContext';
// react
import { useState } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';
// styles
import drawerStyles from '~styles/Drawer.module.scss';
import styles from '~styles/Header.module.scss';
// hooks
import useImage from '~/hooks/useImage';
import useResponsive from '~/hooks/useResponsive';
// others
import { setCookie } from 'cookies-next';
import Hamburger from 'hamburger-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import theme from '~/theme';
import LoginHeaderBar from '../header/LoginHeaderBar';

import CNIcon from '../icon/CNIcon';
import USIcon from '../icon/USIcon';
import VNIcon from '../icon/VNIcon';

const languageOptions = [
  { id: 1, label: 'vietnamese', value: 'vi', icon: <VNIcon /> },
  { id: 2, label: 'english', value: 'en', icon: <USIcon /> },
  { id: 3, label: 'chinese', value: 'cn', icon: <CNIcon /> },
];

export default function Navbar() {
  const t = useTranslations();
  const { language, setLanguage } = useAppContext();
  const router = useRouter();
  const imageUri = useImage(AppImages.logoVietQr);
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lg');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTabletSize = useMediaQuery(
    '(min-width: 768px) and (max-width: 1169px)',
  );
  const isTabletVertical = isPortrait && isTabletSize;

  const onChangeLanguage = (e) => {
    const locale = e.target.value;
    setCookie(LOCALE_COOKIE, locale);
    setLanguage(locale);
    router.refresh();
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: '100%',
        padding: '1rem',
        justifyContent: 'space-between',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack spacing={40}>
        <Box sx={{ marginBottom: '2rem', position: 'relative' }}>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disableRipple
          >
            <Link href="/">
              {imageUri && (
                <Image
                  quality={100}
                  priority
                  alt="VietQR logo"
                  src={imageUri}
                  height={60}
                  width={140}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              )}
            </Link>
          </Button>
          <LoginHeaderBar
            styles={drawerStyles}
            style={{
              whiteSpace: 'nowrap',
              display: 'block',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: '100%',
            }}
          />
        </Box>
      </Stack>
    </Box>
  );

  return (
    <Box
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '100%',
        }}
      >
        <Box
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            marginTop: '-0.7rem',
            marginLeft: -2,
          }}
        >
          {/* Hamburger Menu for small screens */}
          <IconButton
            sx={{
              display: {
                xs: 'block',
                lg: isTabletVertical ? 'block' : 'none',
                xl: 'none',
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <Hamburger
              toggled={isDrawerOpen}
              toggle={setIsDrawerOpen}
              size={isDesktop ? 30 : 20}
            />
          </IconButton>
          {/* Logo for xs screen sizes */}
          <Button
            sx={{
              margin: '0 auto',
              display: {
                xs: 'flex',
                lg: isTabletVertical ? 'flex' : 'none',
                xl: 'none',
              },
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: {
                xs: '28.7%',
                sm: '40.2%',
                md: '41.5%',
                lg: '40%',
                xl: '45%',
              },
              transform: { translateX: '50%' },
            }}
            disableRipple
            disableTouchRipple
          >
            <Link href="/">
              {imageUri && (
                <Image
                  quality={100}
                  priority
                  alt="VietQR logo"
                  src={imageUri}
                  height={80}
                  width={160}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              )}
            </Link>
          </Button>
          {/* System Func xs screen sizes */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                lg: 'none',
              },
              gap: {
                xs: 0,
                lg: 2,
              },
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                color: 'black',
                fontSize: {
                  xs: '10px',
                  md: '12px',
                },
                flexDirection: 'row',
                flexWrap: 'wrap',
                fontWeight: 'normal',
                textTransform: 'none',
                gap: {
                  xs: 0,
                  lg: '0.5rem',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                },
                p: 0,
                justifyContent: 'flex-end',
              }}
              disableRipple
            >
              <HeadphonesOutlinedIcon width={20} />
              {isMdUp && t('contact')}
            </Button>
            <Select
              value={language}
              onChange={onChangeLanguage}
              IconComponent={ExpandMoreIcon}
              renderValue={(selected) => {
                const selectedOption = languageOptions.find(
                  (option) => option.value === selected,
                );
                return selectedOption ? selectedOption.icon : null;
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
              }}
            >
              {languageOptions.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.value}
                  sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  {option.icon}
                  {t(option.label)}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {/* Full Navbar for larger screens */}
          <Box
            sx={{
              display: {
                xs: 'none',
                lg: isTabletVertical ? 'none' : 'flex',
                xl: 'flex',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Grid container>
              <Grid item xs={6}>
                <LoginHeaderBar
                  styles={styles}
                  style={{
                    whiteSpace: 'nowrap',
                    width: '100%',
                    '& .active': {
                      width: {
                        xs: '100%',
                      },
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      display: 'flex',
                    },
                    '& .active::after': {
                      width: {
                        xs: '100%',
                        lg: '90%',
                      },
                    },
                  }}
                  typographyStyle={{
                    fontSize: {
                      xs: '12px',
                      md: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                    },
                    mt: 1.5,
                    marginLeft: { xs: 'auto', md: '0', lg: 8, xl: '5rem' },
                  }}
                  disableRipple
                >
                  <Link href="/">
                    <Image
                      quality={100}
                      priority
                      alt="VietQR logo"
                      src="/images/Logo_min.png"
                      height={32}
                      width={66}
                    />
                  </Link>
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: '20%',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '1rem',
              }}
            >
              <Button
                sx={{
                  color: 'black',
                  fontSize: {
                    xs: '10px',
                    md: '12px',
                  },
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  fontWeight: 'normal',
                  textTransform: 'none',
                  gap: '0.5rem',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'none',
                  },
                }}
                disableRipple
              >
                <HeadphonesOutlinedIcon width={20} />
                {t('contact')}
              </Button>
              <Select
                value={language}
                onChange={onChangeLanguage}
                IconComponent={ExpandMoreIcon}
                sx={{
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '.MuiSelect-icon': {
                    color: 'inherit',
                  },
                  fontSize: {
                    xs: '15px',
                    md: '12px',
                  },
                  '.MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  },
                }}
              >
                {languageOptions.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.value}
                    sx={{
                      justifyContent: 'center',
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    {option.icon}
                    {t(option.label)}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
}
