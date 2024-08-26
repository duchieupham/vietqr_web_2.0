import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import imagesAPI from '~/api/images/imagesService';
import { CarouselSlider, Contact, Social } from '~/sections/login/footer';

function FooterLogin() {
  const [bankType, setBankType] = useState([]);

  const bankTypeList = async () => {
    try {
      const res = await imagesAPI.bankTypeList();
      // console.log('API Response:', res.data); // Debugging
      setBankType(res.data);
    } catch (error) {
      console.error('Error fetching bank types:', error);
    }
  };

  useEffect(() => {
    bankTypeList();
  }, []);

  return (
    <Box>
      <Grid container columns={16}>
        <Grid container item columns={16} sx={{ padding: '2rem' }}>
          <Grid item xs={6}>
            <Contact />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={6}>
            <Social />
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
