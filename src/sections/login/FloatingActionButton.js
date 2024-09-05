import { Fab, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function FloatingActionButton() {
  const isSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Fab
      sx={{
        position: 'fixed',
        top: isSm ? 60 : 'auto',
        right: isSm ? 25 : 50,
        background: 'transparent',
        boxShadow: 'none',
      }}
      disableRipple
      disableFocusRipple
    >
      <Link href="/notice" target="_blank">
        <Image
          quality={100}
          priority
          src="/images/update_fee_icon.png"
          width={isSm ? 80 : 150}
          height={isSm ? 80 : 150}
          alt="update_fee_icon"
        />
      </Link>
    </Fab>
  );
}
