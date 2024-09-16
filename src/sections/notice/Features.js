import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const features = [
  {
    icon: '/images/wallet.png',
    feat: 'Nhận thông báo biến động số dư',
  },
  {
    icon: '/images/global.png',
    feat: 'Chia sẻ BĐSD qua nền tảng mạng xã hội',
  },
  {
    icon: '/images/House.png',
    feat: 'Quản lý doanh thu các cửa hàng',
  },
];
export default function Features() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        alignContent: 'center',
        gap: 2,
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        position: 'relative',
        transform: {
          xs: 'translateX(15%)',
          sm: 'translateX(30%)',
          md: 'translateX(0)',
        },
      }}
    >
      {features.map((feature) => (
        <Box
          key={feature.feat}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Image src={feature.icon} alt="image" width={50} height={50} />
          <Typography
            sx={{
              fontSize: { xs: 13, md: 15 },
              whiteSpace: 'nowrap',
            }}
          >
            {feature.feat}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
