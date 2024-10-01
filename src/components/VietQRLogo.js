import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VietQRLogo({ style, ...props }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        ...style,
      }}
      onClick={() => router.push('/')}
    >
      <Image
        src="/images/VietQRLogo.png"
        width={70}
        height={36}
        alt="VietQR Logo"
        quality={100}
        priority
      />
    </Box>
  );
}
