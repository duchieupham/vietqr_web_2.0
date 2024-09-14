import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VietQRLogo({ style, ...props }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        padding: '16px',
        textAlign: 'center',
        px: '16px',
        ...style,
      }}
      onClick={() => router.push('/')}
    >
      <Image
        src="/images/VietQRLogo.png"
        width={97}
        height={47}
        alt="VietQR Logo"
        quality={100}
        priority
      />
    </Box>
  );
}
