// mui
import { Box, Button, Stack } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import styles from '~styles/Header.module.scss';

const list = [
  {
    name: 'loginQR',
    id: 1,
  },
  {
    name: 'downloadQR',
    id: 2,
  },
];

export default function CreateQR() {
  const t = useTranslations();
  const selectedTab = useRef(null);

  const [qrState, setQrState] = useState(t('loginQR'));

  const handleClick = (tab) => {
    selectedTab.current = tab;
    setQrState(tab);
  };

  return (
    <Box component="div">
      <Stack spacing={2}>
        <Box component="div">
          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
            className={styles.nav}
          >
            <Button
              component="button"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '10px',
                color: qrState === t('loginQR') ? '#00c6ff' : 'inherit',
              }}
              className={`${qrState === t('loginQR') ? styles.active : ''}`}
              onClick={() => handleClick(t('loginQR'))}
            >
              {t('loginQR')}
            </Button>
            <Button
              component="button"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '10px',
                color: qrState === t('downloadQR') ? '#00c6ff' : 'inherit',
              }}
              className={`${qrState === t('downloadQR') ? styles.active : ''}`}
              onClick={() => handleClick(t('downloadQR'))}
            >
              {t('downloadQR')}
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
