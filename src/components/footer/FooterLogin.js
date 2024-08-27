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
  let direction = 'row';

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

  if (isMobile || isTabletVertical) {
    direction = 'column';
  }

  console.log(direction);

  return (
    <Box>
      <Grid container columns={16} spacing={direction === 'row' ? '' : 25}>
        <Grid
          container
          item
          columns={16}
          sx={{
            padding: '2rem',
            justifyContent: direction === 'row' ? '' : 'space-between',
          }}
          direction={direction}
          spacing={direction === 'row' ? 0 : 10}
        >
          <Grid item xs={direction === 'row' ? 6 : 0}>
            <Contact
              style={{
                justifyContent:
                  direction === 'row' ? 'space-between' : 'space-evenly',
              }}
            />
          </Grid>
          {direction === 'row' && <Grid item xs={2} />}
          <Grid item xs={direction === 'row' ? 6 : 0}>
            <Social
              style={{
                margin: direction === 'row' ? '' : '0 auto',
                display: direction === 'row' ? '' : 'flex',
                justifyContent: direction === 'row' ? '' : 'space-evenly',
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={16}>
          <CarouselSlider initialValues={bankType} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default FooterLogin;
