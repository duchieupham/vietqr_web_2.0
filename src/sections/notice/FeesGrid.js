/* eslint-disable react/no-array-index-key */
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { TextGradient } from '~/components/text';

const promoItems = [
  { id: 1, duration: '12 tháng', promo: 'Khuyến mãi 01 tháng' },
  { id: 2, duration: '24 tháng', promo: 'Khuyến mãi 06 tháng' },
  { id: 3, duration: '36 tháng', promo: 'Khuyến mãi 12 tháng' },
];

const pricingData = [
  {
    id: 1,
    category: 'Khách hàng Cá nhân',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: [
      { id: 1, price: '712,800' },
      { id: 2, price: '1,425,600' },
      { id: 3, price: '2,138,400' },
    ],
  },
  {
    id: 2,
    category: 'Khách hàng Doanh nghiệp',
    includesVAT: 'Đã bao gồm VAT (8%)',
    prices: [
      { id: 1, price: '1,425,600' },
      { id: 2, price: '2,851,200' },
      { id: 3, price: '4,276,800' },
    ],
  },
];

const features = [
  {
    id: 1,
    feat: 'Nhận Biến động số dư',
    active: [
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: true },
    ],
  },
  {
    id: 2,
    feat: 'Đối soát giao dịch',
    active: [
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: true },
    ],
  },
  {
    id: 3,
    feat: 'Quản lý cửa hàng',
    active: [
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: true },
    ],
  },
  {
    id: 4,
    feat: 'Thống kê dữ liệu',
    active: [
      { id: 1, active: true },
      { id: 2, active: true },
      { id: 3, active: true },
    ],
  },
];

export default function FeesGrid() {
  const theme = useTheme();
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
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={3} sm="auto" />
            {promoItems.map((item) => (
              <Grid item xs={3} sm={4} key={item.id}>
                <Box
                  sx={{
                    borderLeft: '1px solid #DADADA',
                    width: {
                      xs: '70',
                      sm: '100%',
                    },
                    ml: { xs: 0, sm: 1.7 },
                    py: 2,
                    px: 0.5,
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
              </Grid>
            ))}
          </Grid>
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
          <TableContainer
            sx={{
              overflowX: 'hidden',
            }}
          >
            <Table>
              <TableBody>
                {pricingData.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell
                      sx={{
                        border: '1px solid #DADADA',
                        width: { xs: 70, sm: 335 },
                        height: 80,
                        px: { xs: 0.3, sm: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#1E427E',
                          fontSize: { xs: 13, md: 15 },
                          width: { xs: 85, sm: 200 },
                        }}
                      >
                        {data.category}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#EC2232',
                          fontSize: { xs: 10, md: 12 },
                          width: { xs: 70, sm: 200 },
                        }}
                      >
                        {data.includesVAT}
                      </Typography>
                    </TableCell>
                    {data.prices.map((price) => (
                      <TableCell
                        key={price.id}
                        sx={{
                          border: '1px solid #DADADA',
                          width: { xs: 80, sm: 200 },
                          height: 80,
                          p: 0.3,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: {
                              xs: 'wrap',
                              sm: 'nowrap',
                            },
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          <TextGradient
                            style={{
                              fontSize: { xs: 15, md: 20 },
                              fontWeight: 'bold',
                            }}
                          >
                            {price.price}
                          </TextGradient>
                          <Typography
                            sx={{
                              alignSelf: 'flex-end',
                              mb: 0.2,
                              color: theme.palette.slateGray,
                              fontSize: 12,
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
          <TableContainer>
            <Table>
              <TableBody>
                {features.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell
                      sx={{
                        border: '1px solid #DADADA',
                        width: { xs: 70, sm: 335 },
                        height: 80,
                        px: { xs: 0.3, sm: 2 },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#1E427E',
                          fontSize: { xs: 13, md: 15 },
                          width: { xs: 88, sm: 200 },
                        }}
                      >
                        {data.feat}
                      </Typography>
                    </TableCell>
                    {data.active.map((isActive) => (
                      <TableCell
                        key={isActive.id}
                        sx={{
                          border: '1px solid #DADADA',
                          minHeight: 80,
                          width: { xs: 80, sm: 200 },
                          p: 0,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 0.5,
                          }}
                        >
                          {isActive.active ? (
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
