import { Grid } from '@mui/material';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

function FooterLogin() {
  return (
    <Grid container>
      <FooterLeft
        hotline="1900 6234"
        phone="0922 333 636"
        emailSales="sales@vietqr.vn"
        emailIt="itsupport@vietqr.vn"
      />
      <FooterRight />
    </Grid>
  );
}
export default FooterLogin;
