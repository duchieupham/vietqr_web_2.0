import { Box, Typography } from '@mui/material';
import styles from '~styles/Footer.module.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

// eslint-disable-next-line object-curly-newline
function FooterLeft({ hotline, phone, emailSales, emailIt }) {
  const iconStyle = {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    fontSize: '0.75rem',
  };
  const textStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.88rem' },
  };
  return (
    <Box
      component="div"
      className={styles.footer__left}
      sx={{
        display: 'flex',
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '90%',
        },
        height: '100%',
        justifyContent: 'space-around',
        background: 'transparent',
        marginTop: '15px',
        overflow: 'hidden',
      }}
    >
      <Box component="div" className={styles.footer__left_col}>
        <Typography sx={textStyle}>
          <LocalPhoneOutlinedIcon sx={iconStyle} />
          {hotline}
        </Typography>
        <Typography sx={textStyle}>
          <MarkEmailUnreadOutlinedIcon sx={iconStyle} />
          {emailSales}
        </Typography>
      </Box>
      <Box
        component="div"
        className={styles.footer__left_col}
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      >
        <span />
        <span />
      </Box>
      <Box
        component="div"
        className={styles.footer__left_col}
        sx={{
          fontSize: { xs: '0.75rem', sm: '0.75rem', md: '0.88rem' },
        }}
      >
        <Typography sx={textStyle}>
          <PhoneIphoneOutlinedIcon sx={iconStyle} />
          {phone}
        </Typography>
        <Typography sx={textStyle}>
          <MarkEmailUnreadOutlinedIcon sx={iconStyle} />
          {emailIt}
        </Typography>
      </Box>
    </Box>
  );
}
export default FooterLeft;
