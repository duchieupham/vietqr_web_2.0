import { Box, Grid, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import imagesAPI from '~/api/images/imagesService';
import { CarouselSlider, Contact, Social } from '~/sections/login/footer';
import theme from '~/theme';

function FooterLogin() {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTabletSize = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)',
  );
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTabletVertical = isPortrait && isTabletSize;
  const [bankType, setBankType] = useState([]);

  const bankTypeList = async () => {
    try {
      const res = await imagesAPI.bankTypeList();
      // console.log('API Response:', res.data); // Debugging
      setBankType(res.data);
    } catch (error) {
      // console.error('Error fetching bank types:', error);
    }
  };

  useEffect(() => {
    bankTypeList();
  }, []);

  return (
    <Box
      sx={{
        px: {
          xs: 2,
          md: 4,
          lg: '2rem',
        },
        pt: {
          xs: '3rem',
          lg: '2rem',
        },
      }}
    >
      <Grid
        container
        item
        columns={12}
        spacing={2}
        sx={{
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
          alignItems: {
            xs: 'center',
            lg: 'flex-start',
          },
        }}
      >
        <Grid item xs={12} lg={6} sx={{ width: '100%' }}>
          <Contact />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Social
            sx={{
              margin: isTabletVertical ? '0 6rem' : '',
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={16}>
        <CarouselSlider initialValues={bankType} />
      </Grid>
    </Box>
  );
}
export default FooterLogin;
