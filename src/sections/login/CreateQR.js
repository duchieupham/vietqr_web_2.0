// mui
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRef, useState } from 'react';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';
import { TextGradient } from '~/components/text';
import useResponsive from '~/hooks/useResponsive';
import theme from '~/theme';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useResponsive('up', 'lg');

  const [qrState, setQrState] = useState(t('loginQR'));

  const handleClick = (tab) => {
    selectedTab.current = tab;
    setQrState(tab);
  };

  return (
    <Container
      sx={{
        padding: isMobile ? '10px' : '20px',
        maxWidth: isDesktop ? '1024px' : '768px',
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 0.5, sm: 1.5 }}
        useFlexGap
        flexWrap="wrap"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '20px',
            width: isMobile ? '100%' : '76%',
          }}
        >
          {list.map((item) => (
            <Button
              key={item.id}
              component="button"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: { xs: '100px', sm: '150px' },
                borderRadius: '10px',
                color: qrState === t(item.name) ? '#00c6ff' : 'inherit',
                transition:
                  'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
                backgroundColor:
                  qrState === t(item.name) ? 'transparent' : 'initial',
                '&:hover': {
                  background:
                    'linear-gradient(90deg, rgba(0,198,255,0.7), rgba(0,114,255, 1.0))',
                  textDecoration: 'none',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  transform: 'scale(0.98)',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'none',
                  },
                  '&:active': {
                    backgroundColor: 'transparent',
                  },
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                },
                '&:active': {
                  backgroundColor: 'transparent',
                },
                fontSize: { xs: '12px', sm: '14.5px' },

                '&::after': {
                  background: 'red',
                },
              }}
              disableRipple
              className={`${styles.btn} ${qrState === t(item.name) ? styles.active : ''}`}
              onClick={() => handleClick(t(item.name))}
            >
              {t(item.name)}
            </Button>
          ))}
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: isDesktop ? '30%' : '45%',
            }}
          >
            <QRCodeComponent value="https://www.messenger.com/" />
          </Box>
          <Box
            sx={{
              width: isDesktop ? '50%' : '100%',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                margin: '1rem 0',
              }}
            >
              {t('scanQR')}
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                color: '#6C6C6C',
                lineHeight: '1.5',
                margin: '1rem 0',
              }}
            >
              {t('scanQRDescription')}
            </Typography>
            <Link href="/" style={{}}>
              <TextGradient
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #458BF8, #FF8021, #FF3751, #C958DB)',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                {t('downloadApp')}
              </TextGradient>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
