import { Box, Typography } from '@mui/material';
import styles from '~styles/Footer.module.scss';

// eslint-disable-next-line object-curly-newline
function FooterLeft({ hotline, phone, emailSales, emailIt }) {
  return (
    <Box component="div" className={styles.footer__left}>
      <Box component="div" className={styles.footer__left_col}>
        <Typography>{hotline}</Typography>
        <Typography>{emailSales}</Typography>
      </Box>
      <Box component="div" className={styles.footer__left_col}>
        <span />
        <span />
      </Box>
      <Box component="div" className={styles.footer__left_col}>
        <Typography>{phone}</Typography>
        <Typography>{emailIt}</Typography>
      </Box>
    </Box>
  );
}
export default FooterLeft;
