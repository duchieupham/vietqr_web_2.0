/* eslint-disable react/no-array-index-key */
import CheckIcon from '@mui/icons-material/Check';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const promoItems = [
  { duration: '12 tháng', promo: 'Khuyến mãi 01 tháng' },
  { duration: '24 tháng', promo: 'Khuyến mãi 06 tháng' },
  { duration: '36 tháng', promo: 'Khuyến mãi 12 tháng' },
];

const pricingData = [
  {
    category: 'Khách hàng Cá nhân',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: ['712,800 VND', '1,425,600 VND', '2,138,400 VND'],
  },
  {
    category: 'Khách hàng Doanh nghiệp',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: ['1,425,600 VND', '2,851,200 VND', '4,276,800 VND'],
  },
];

const features = [
  'Nhận Biến động số dư',
  'Đối soát giao dịch',
  'Quản lý cửa hàng',
  'Thống kê dữ liệu',
];

export default function FeesGrid() {
  const t = useTranslations();
  const fees =
    ('tháng',
    'Khuyến mãi',
    'VND',
    'Mức phí',
    'Tính năng',
    'Khách hàng cá nhân',
    'Khách hàng doanh nghiệp',
    'Đã bao gồm VAT (8%)');
  return (
    <Box sx={{ p: 20 }}>
      <Grid
        container
        columns={16}
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Grid item xs={12} md="auto">
          <Image
            src="/images/image 498.png"
            width={240}
            height={150}
            alt="image 498"
          />
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: '1px',
              height: '60px',
              backgroundColor: '#E0E0E0',
              display: { xxs: 'none', md: 'block' },
              mx: 3,
            }}
          />
        </Grid>
        {promoItems.map((item, index) => (
          <>
            <Grid item xs={12} md="auto">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xxs: 18, md: 20 },
                  color: '#003366',
                  textAlign: 'center',
                }}
              >
                {item.duration}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xxs: 12, md: 14 },
                  color: '#FF3333',
                  textAlign: 'center',
                }}
              >
                {item.promo}
              </Typography>
            </Grid>
            {index < promoItems.length - 1 && (
              <Grid item>
                <Box
                  sx={{
                    width: '1px',
                    height: '60px',
                    backgroundColor: '#E0E0E0',
                    display: { xxs: 'none', md: 'block' },
                    mx: 3,
                  }}
                />
              </Grid>
            )}
          </>
        ))}
        <Grid item xs={16}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: { xxs: 20, md: 25 },
              color: '#1E427E',
              lineHeight: 1.2,
              whiteSpace: 1.2,
              letterSpacing: '0.1em',
              position: 'relative',
              left: '-25%',
            }}
          >
            Mức phí
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
