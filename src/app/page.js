import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from '~styles/page.module.scss';

function Home() {
  return (
    <div className={styles.vietqr_home}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Image
          priority
          alt="logo"
          src="/images/logo.png"
          width={500}
          height={200}
        />
        <h1>Welcome to VietQR</h1>
        <Link href="/dashboard">
          <Button
            variant="contained"
            sx={{
              backgroundColor: {
                xs: 'red',
                md: 'black',
              },
            }}
          >
            Go to Dashboard
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default Home;
