/* eslint-disable react/no-array-index-key */
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const promoItems = [
  { duration: '12 tháng', promo: 'Khuyến mãi 01 tháng' },
  { duration: '24 tháng', promo: 'Khuyến mãi 06 tháng' },
  { duration: '36 tháng', promo: 'Khuyến mãi 12 tháng' },
];

const pricingData = [
  {
    category: 'Khách hàng Cá nhân',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: ['712,800', '1,425,600', '2,138,400'],
  },
  {
    category: 'Khách hàng Doanh nghiệp',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: ['1,425,600', '2,851,200', '4,276,800'],
  },
];

const features = [
  { feat: 'Nhận Biến động số dư', active: [true, true, true] },
  { feat: 'Đối soát giao dịch', active: [true, true, true] },
  { feat: 'Quản lý cửa hàng', active: [true, true, true] },
  { feat: 'Thống kê dữ liệu', active: [true, true, true] },
];

const lineStyle = {
  width: '1px',
  height: '100px',
  backgroundColor: '#DADADA',
  mx: 3,
};

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
    <Box sx={{ px: { xs: 2, sm: 5, md: 10, lg: 20 } }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3.6 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/images/image 498.png"
            width={240}
            height={150}
            alt="image 498"
          />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex' }}>
          {promoItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                minWidth: 200,
                minHeight: 80,
                alignContent: 'center',
                display: 'flex',
                gap: 2,
                p: 2,
                pl: 0,
                ml: { xs: 0, sm: -0.5 },
                mr: 2,
                whiteSpace: 'nowrap',
              }}
            >
              <Box sx={{ ...lineStyle, width: '1px' }} />
              <Box
                sx={{
                  alignContent: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: '#1E427E',
                    fontSize: { xs: 15, md: 20 },
                  }}
                >
                  {item.duration}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#EC2232',
                    fontSize: { xs: 12, md: 15 },
                  }}
                >
                  {item.promo}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: { xs: 12, md: 15 },
              color: '#1E427E',
              fontWeight: 'bold',
              textAlign: 'start',
              mb: 2,
              ml: 2,
            }}
          >
            Mức phí
          </Typography>
          <TableContainer sx={{ overflowX: 'auto' }}>
            <Table>
              <TableBody>
                {pricingData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        border: '1px solid #DADADA',
                        maxWidth: 400,
                        minHeight: 80,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#1E427E',
                          fontSize: { xs: 13, md: 15 },
                        }}
                      >
                        {data.category}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#EC2232',
                          fontSize: { xs: 10, md: 12 },
                        }}
                      >
                        {data.includesVAT}
                      </Typography>
                    </TableCell>
                    {data.prices.map((price, _index) => (
                      <TableCell
                        key={_index}
                        sx={{
                          border: '1px solid #DADADA',
                          maxWidth: 200,
                          maxHeight: 150,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#1E427E',
                              fontSize: { xs: 15, md: 20 },
                              fontWeight: 'bold',
                            }}
                          >
                            {price}
                          </Typography>
                          <Typography
                            sx={{
                              alignSelf: 'flex-end',
                              mb: 0.2,
                              color: '#666A72',
                            }}
                          >
                            VND
                          </Typography>
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: { xs: 12, md: 15 },
              color: '#1E427E',
              fontWeight: 'bold',
              textAlign: 'start',
              mb: 2,
              ml: 2,
            }}
          >
            Tính năng
          </Typography>
          <TableContainer sx={{ overflowX: 'auto' }}>
            <Table>
              <TableBody>
                {features.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        border: '1px solid #DADADA',
                        maxWidth: 400,
                        minHeight: 80,
                        width: { xs: '60%', md: '30.5%' },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#1E427E',
                          fontSize: { xs: 13, md: 15 },
                        }}
                      >
                        {data.feat}
                      </Typography>
                    </TableCell>
                    {data.active.map((isActive, __index) => (
                      <TableCell
                        key={__index}
                        sx={{
                          border: '1px solid #DADADA',
                          minWidth: 200,
                          minHeight: 80,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          {isActive ? (
                            <CheckCircleIcon
                              sx={{ color: '#0A7AFF', fontSize: 20 }}
                            />
                          ) : (
                            <CancelIcon
                              sx={{ color: '#EC2232', fontSize: 20 }}
                            />
                          )}
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
