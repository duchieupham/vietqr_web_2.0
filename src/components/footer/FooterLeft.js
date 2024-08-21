import { Box, Typography } from '@mui/material';
import styles from '~styles/Footer.module.scss';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

// eslint-disable-next-line object-curly-newline
function FooterLeft({ hotline, phone, emailSales, emailIt }) {
  return (
    <Box
      component="div"
      className={styles.footer__left}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        gap: '10px',
      }}
    >
      <Box component="div" className={styles.footer__left_col} sx={{}}>
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '0.9rem',
          }}
        >
          <LocalPhoneOutlinedIcon
            sx={{
              color: 'black',
              fontSize: '0.8rem',
              alignItems: 'center',
              justifyItems: 'center',
              marginX: '10px',
            }}
          />
          {hotline}
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '0.9rem',
          }}
        >
          <MarkEmailUnreadOutlinedIcon
            sx={{
              color: 'black',
              fontSize: '0.8rem',
              alignItems: 'center',
              justifyItems: 'center',
              marginX: '10px',
            }}
          />
          {emailSales}
        </Typography>
      </Box>
      <Box component="div" className={styles.footer__left_col} sx={{}}>
        <span />
        <span />
      </Box>
      <Box component="div" className={styles.footer__left_col} sx={{}}>
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '0.9rem',
          }}
        >
          <PhoneIphoneOutlinedIcon
            sx={{
              color: 'black',
              fontSize: '0.8rem',
              alignItems: 'center',
              justifyItems: 'center',
              marginX: '10px',
            }}
          />
          {phone}
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: '0.9rem',
          }}
        >
          <MarkEmailUnreadOutlinedIcon
            sx={{
              color: 'black',
              fontSize: '0.8rem',
              alignItems: 'center',
              justifyItems: 'center',
              marginX: '10px',
            }}
          />
          {emailIt}
        </Typography>
      </Box>
    </Box>
  );
}
export default FooterLeft;
