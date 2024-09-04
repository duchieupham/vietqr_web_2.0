import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { TextGradient } from '~/components/text';
import Features from '~/sections/notice/Features';
import FeesApply from '~/sections/notice/FeesApply';
import FeesGrid from '~/sections/notice/FeesGrid';
import Footer from '~/sections/notice/Footer';

export default function Notice() {
  const t = useTranslations();
  return (
    <Grid
      container
      columns={16}
      spacing={3}
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
            left: { md: '43%' },
            '&:hover': {
              backgroundColor: 'transparent',
            },
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
              src="/images/image 282.png"
              height={100}
              width={203.33}
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
              fontWeight: 'normal',
              fontSize: {
                xxs: 20,
                md: 25,
              },
              color: '#1E427E',
              textAlign: 'center',
              margin: '0 auto',
              maxWidth: '681px',
              maxHeight: '30px',
            }}
          >
            {t('noticeUpdateServiceFee')}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={16}>
        {/* image */}
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            justifyContent: 'center',
            flexDirection: {
              xxs: 'column',
              md: 'row',
            },
          }}
        >
          <Box
            sx={{
              margin: {
                xxs: '0 auto',
                md: '0',
              },
            }}
          >
            <Image
              src="/images/image 500.png"
              width={138}
              height={92}
              alt="image 498"
            />
          </Box>
          <Stack
            spacing={{ xxs: 9, md: 2 }}
            sx={{
              alignItems: 'flex-start',
              color: '#1E427E',
              textAlign: {
                xxs: 'center',
                md: 'start',
              },
            }}
          >
            <Box
              sx={{
                maxWidth: '672px',
                maxHeight: '36px',
              }}
            >
              <Typography>{t('noticeUpdateServiceFeeContent')}</Typography>
            </Box>
            <Box
              sx={{
                maxWidth: '635px',
                maxHeight: '36px',
              }}
            >
              <Typography>{t('noticeUpdateServiceFeeContent2')}</Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={16}>
        <FeesApply />
      </Grid>
      <Grid item xs={16}>
        <FeesGrid />
      </Grid>
      <Grid item xs={16}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Image
              alt="image 422"
              src="/images/image 422.png"
              width={150}
              height={150}
            />
          </Box>
          <Box>
            <TextGradient
              style={{
                fontSize: { xxs: 20, md: 25 },
                color: '#1E427E',
              }}
            >
              Giải pháp tối ưu cho doanh nghiệp
            </TextGradient>
            <Typography sx={{ fontSize: { xxs: 15, md: 20 } }}>
              Đăng ký để trải nghiệm các tính năng không giới hạn.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={16}>
        <Features />
      </Grid>
      <Grid item xs={16}>
        <Footer />
      </Grid>
    </Grid>
  );
}
