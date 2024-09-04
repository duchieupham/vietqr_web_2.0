import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const features = [
  {
    icon: '450',
    feat: 'Nhận thông báo biến động số dư',
  },
  {
    icon: '404',
    feat: 'Chia sẻ BĐSD qua nền tảng mạng xã hội',
  },
  {
    icon: '411',
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
      }}
    >
      {features.map((feature, index) => (
        <Box key={feature} sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={`/images/image ${feature.icon}.png`}
            alt="image"
            width={50}
            height={50}
          />
          <Typography sx={{ fontSize: { xs: 13, md: 15 } }}>
            {feature.feat}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
