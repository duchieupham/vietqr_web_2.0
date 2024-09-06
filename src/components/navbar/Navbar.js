// eslint-disable-next-line object-curly-newline
// mui
import { Box, Button, Drawer, Grid, IconButton, Stack } from '@mui/material';
// constants
import AppImages from '~/constants/ImagesConstant';
// contexts
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
import Hamburger from 'hamburger-react';
import LoginHeaderBar from '../header/LoginHeaderBar';

import Contact_LangButton from '../Contact_LangButton';
import USIcon from '../icon/USIcon';
import VNIcon from '../icon/VNIcon';

const languageOptions = [
  { id: 1, label: 'vietnamese', value: 'vi', icon: <VNIcon /> },
  { id: 2, label: 'english', value: 'en', icon: <USIcon /> },
];

export default function Navbar() {
  const imageUri = useImage(AppImages.logoVietQr);

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
                md: 'none',
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
              display: {
                xs: 'flex',
                md: 'none',
              },
              m: '0 auto',
              pl: 12,
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
          <Contact_LangButton
            languageOptions={languageOptions}
            style={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: 'flex-end',
            }}
          />
          {/* Full Navbar for larger screens */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Grid container>
              <Grid item xs={6} md={6}>
                <LoginHeaderBar
                  styles={styles}
                  style={{
                    whiteSpace: 'nowrap',
                    '& .active': {
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      display: 'flex',
                    },
                    '& .active::after': {
                      width: {
                        xs: '100%',
                        md: '90%',
                      },
                    },
                  }}
                  typographyStyle={{
                    fontSize: {
                      xs: '12px',
                      md: '15px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} md={3}>
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
                    marginLeft: { xs: 'auto', md: '0', xl: '5rem' },
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
              <Grid item xs={6} md={3}>
                <Contact_LangButton languageOptions={languageOptions} />
              </Grid>
            </Grid>
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
