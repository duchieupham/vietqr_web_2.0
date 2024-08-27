// eslint-disable-next-line object-curly-newline
// mui
import { Box, Button, Drawer, Grid, IconButton, Stack } from '@mui/material';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
// constants
import AppImages from '~/constants/ImagesConstant';
// react
import { useState } from 'react';
// next
import Link from 'next/link';
import Image from 'next/image';
// styles
import styles from '~styles/Header.module.scss';
import drawerStyles from '~styles/Drawer.module.scss';
// hooks
import useResponsive from '~/hooks/useResponsive';
import useImage from '~/hooks/useImage';
// others
import { useTranslations } from 'next-intl';
import Hamburger from 'hamburger-react';
import LoginHeaderBar from '../header/LoginHeaderBar';

export default function Navbar() {
  const t = useTranslations();
  const imageUri = useImage(AppImages.logoVietQr);
  const optionSelect = [{ language: 'vietnamese' }];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useResponsive('up', 'lg');

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
        width: { xs: '150px' },
        padding: '1rem',
        justifyContent: 'space-between',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack spacing={40}>
        <Box sx={{ marginBottom: '2rem', position: 'relative' }}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
          </Box>
          <LoginHeaderBar
            styles={drawerStyles}
            style={{
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
          {/* <Select sx={{ width: '100%' }}>
            {optionSelect.map((option) => (
              <MenuItem key={option.language}>{t(option.language)}</MenuItem>
            ))}
          </Select> */}
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
          }}
        >
          {/* Hamburger Menu for small screens */}
          <IconButton
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'block',
                lg: 'none',
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
          <Box
            component="div"
            sx={{
              margin: '0 auto',
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'flex',
                lg: 'none',
                xl: 'none',
              },
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: { xs: '30%', sm: '30%', md: '40%', lg: '40%', xl: '45%' },
              transform: { translateX: '50%' },
            }}
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
          </Box>
          {/* Full Navbar for larger screens */}
          <Box
            component="div"
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
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
                    width: '100%',
                    '& .active': {
                      width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '100%',
                        xl: '100%',
                      },
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      display: 'flex',
                    },
                    '& .active::after': {
                      width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '90%',
                        xl: '90%',
                      },
                    },
                  }}
                  typographyStyle={{
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '12px',
                      lg: '15px',
                      xl: '16px',
                    },
                  }}
                />
              </Grid>
              {/* Logo for all screen sizes */}
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
                    marginTop: '-0.7rem',
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
                    sm: '15px',
                    md: '12px',
                    lg: '12px',
                    xl: '12px',
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
              {/* <Select>
                {optionSelect.map((option) => (
                  <MenuItem key={option.language}>
                    {t(option.language)}
                  </MenuItem>
                ))}
              </Select> */}
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
