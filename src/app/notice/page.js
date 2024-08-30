import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import FeesApply from '~/sections/notice/FeesApply';
import FeesGrid from '~/sections/notice/FeesGrid';

export default function Notice() {
  const t = useTranslations();
  return (
    <Grid
      container
      columns={16}
      sx={{
        gap: 2,
        p: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 1.5,
      }}
    >
      <Grid item xs={16}>
        <Button
          sx={{
            position: 'relative',
            transition: 'translateX(50%)',
            left: { md: '46%' },
          }}
          disableRipple
          disableTouchRipple
          disableFocusRipple
        >
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
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xxs: 20,
                md: 25,
              },
              color: '#1E427E',
              lineHeight: 1.2,
              whiteSpace: 1.2,
              textAlign: 'center',
              letterSpacing: '0.1em',
            }}
          >
            {t('noticeUpdateServiceFee')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={16}>
        <Box>
          {/* image */}
          <Box>
            <Stack
              spacing={3}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography>{t('noticeUpdateServiceFeeContent')}</Typography>
              </Box>
              <Box>
                <Typography>{t('noticeUpdateServiceFeeContent2')}</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={16}>
        <FeesApply />
      </Grid>
      <Grid item xs={16}>
        <FeesGrid />
      </Grid>
    </Grid>
  );
}
