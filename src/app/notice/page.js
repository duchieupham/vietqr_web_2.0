import { Box, Button, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Notice() {
  const t = useTranslations();
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <Button sx={{}} disableRipple disableTouchRipple>
          <Link href="/">
            <Image
              quality={100}
              priority
              alt="VietQR logo"
              src="/images/logo.png"
              height={80}
              width={160}
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>
        </Button>
      </Grid>
      <Grid item xs={16}>
        <Box>
          <Typography>
            <strong>{t('noticeUpdateServiceFee')}</strong>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={16}>
        <Box>
          {/* <Box>
            <Image alt="Image 500" src="/images/bell.png" />
          </Box>
          <Box></Box> */}
        </Box>
      </Grid>
    </Grid>
  );
}
