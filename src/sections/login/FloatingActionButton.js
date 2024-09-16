import { Fab, keyframes, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function FloatingActionButton() {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <Fab
      sx={{
        position: 'fixed',
        top: isSm ? 60 : 'auto',
        right: isSm ? 25 : 50,
        background: 'transparent',
        boxShadow: 'none',
        animation: `${fadeInUp} 1s ease-out`,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        '&:hover': {
          transform: 'scaleX(-1)',
          opacity: 0.8,
        },
      }}
      disableRipple
      disableFocusRipple
    >
      <Link href="/notice" target="_blank">
        <Image
          quality={100}
          loading="lazy"
          src="/images/update_fee_icon.png"
          width={isSm ? 80 : 150}
          height={isSm ? 80 : 150}
          alt="update_fee_icon"
        />
      </Link>
    </Fab>
  );
}
