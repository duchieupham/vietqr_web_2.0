// eslint-disable-next-line object-curly-newline
// mui
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
import AppImages from '~/constants/ImagesConstant';
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
import { LOCALE_COOKIE } from '~/constants';
import { useAppContext } from '~/contexts/AppContext';
import LoginHeaderBar from '../header/LoginHeaderBar';

const languageOptions = [
  { id: 1, label: 'vietnamese', value: 'vi' },
  { id: 2, label: 'english', value: 'en' },
];

export default function Navbar() {
  const t = useTranslations();
  const { language, setLanguage } = useAppContext();
  const router = useRouter();
  const imageUri = useImage(AppImages.logoVietQr);

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
        width: { xxs: '100%', xs: '100%' },
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
            component="div"
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: 0,
            width: '85%',
            paddingBottom: '2rem',
          }}
        >
          <Button
            sx={{
              color: 'black',
              fontSize: '1rem',
              fontWeight: 'normal',
              textTransform: 'none',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <HeadphonesOutlinedIcon />
            {t('contact')}
          </Button>
          <Select value={language} onChange={onChangeLanguage}>
            {languageOptions.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {t(option.label)}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <Box
      component="div"
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
      }}
    >
      <Box
        component="div"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '100%',
        }}
      >
        <Box
          component="div"
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            marginTop: '-0.7rem',
            marginLeft: {
              xxs: -2,
            },
          }}
        >
          {/* Hamburger Menu for small screens */}
          <IconButton
            sx={{
              display: {
                xxs: 'block',
                xs: 'block',
                sm: 'block',
                md: 'block',
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
          {/* Logo for all screen sizes */}
          <Button
            component="div"
            sx={{
              margin: '0 auto',
              display: {
                xxs: 'flex',
                xs: 'flex',
                sm: 'flex',
                md: 'flex',
                lg: isTabletVertical ? 'flex' : 'none',
                xl: 'none',
              },
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: {
                xxs: '27.5%',
                xs: '33%',
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
          {/* Full Navbar for larger screens */}
          <Box
            component="div"
            sx={{
              display: {
                xxs: 'none',
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
                        xxs: '100%',
                      },
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      display: 'flex',
                    },
                    '& .active::after': {
                      width: {
                        xxs: '100%',
                        lg: '90%',
                      },
                    },
                  }}
                  typographyStyle={{
                    fontSize: {
                      xxs: '9px',
                      xs: '10px',
                      sm: '10px',
                      md: '12px',
                      lg: '14px',
                      xl: '16px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  component="div"
                  sx={{
                    display: { xs: 'flex', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                    },
                    marginTop: '-0.5rem',
                    marginLeft: { xs: 'auto', md: '0', lg: '2rem', xl: '5rem' },
                  }}
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  disableElevation
                >
                  <Link href="/">
                    {imageUri && (
                      <Image
                        quality={100}
                        priority
                        alt="VietQR logo"
                        src={imageUri}
                        height={70}
                        width={150}
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    )}
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
                    xs: '15px',
                    md: '12px',
                  },
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  fontWeight: 'normal',
                  textTransform: 'none',
                  gap: '0.5rem',
                }}
                disableRipple
              >
                <HeadphonesOutlinedIcon />
                {t('contact')}
              </Button>
              <Select value={language} onChange={onChangeLanguage}>
                {languageOptions.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
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
