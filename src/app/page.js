import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from '~styles/page.module.css';

function Home() {
  const t = useTranslations();

  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href="/list">
        <Button>Go to List</Button>
      </Link>
    </div>
  );
}

export default Home;
