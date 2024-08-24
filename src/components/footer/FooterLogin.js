import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import imagesAPI from '~/api/images/imagesService';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

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
    <Grid
      container
      spacing={1}
      sx={{
        position: 'relative', // Changed to relative
        bottom: 0,
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} sm={12} md={5} lg={3}>
        <FooterLeft
          hotline="1900 6234"
          phone="0922 333 636"
          emailSales="sales@vietqr.vn"
          emailIt="itsupport@vietqr.vn"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={9}>
        <FooterRight initialValues={bankType} />
      </Grid>
    </Grid>
  );
}
export default FooterLogin;
