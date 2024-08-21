import { Grid } from '@mui/material';
import bankTypeAPI from '~/api/bank-type/bankTypeService';
import { useEffect, useState } from 'react';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function FooterLogin() {
  const [bankType, setBankType] = useState([]);

  const bankTypeList = async () => {
    await bankTypeAPI.bankTypeList().then((res) => {
      setBankType(res.data);
    });
  };
  useEffect(() => {
    bankTypeList();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <FooterLeft
          hotline="1900 6234"
          phone="0922 333 636"
          emailSales="sales@vietqr.vn"
          emailIt="itsupport@vietqr.vn"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={9} lg={9}>
        <FooterRight initialValues={bankType} />
      </Grid>
    </Grid>
  );
}
export default FooterLogin;
