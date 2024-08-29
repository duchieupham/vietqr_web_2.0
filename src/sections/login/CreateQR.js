// mui
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';
import { TextGradient } from '~/components/text';
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

const getOS = (userAgent) => {
  if (userAgent.match(/Android/i)) return 'Android';
  if (userAgent.match(/iPhone|iPad|iPod/i)) return 'iOS';
  if (userAgent.match(/Macintosh/i)) return 'Macintosh';
  if (userAgent.match(/Windows NT/i)) return 'Windows NT';
  return 'unknown';
};
export default function CreateQR({
  containerStyle,
  stackStyle,
  encryptedQrValue,
  ...props
}) {
  const t = useTranslations();
  const selectedTab = useRef(null);
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isTabletSize = useMediaQuery(
    '(min-width: 768px) and (max-width: 1024px)',
  );
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTabletVertical = isPortrait && isTabletSize;
  const [qrUrl, setQrUrl] = useState('');

  const [qrState, setQrState] = useState(t('loginQR'));

  const handleClick = (tab) => {
    selectedTab.current = tab;
    setQrState(tab);
  };
  useEffect(() => {
    const userAgent = window?.navigator.userAgent;
    const os = getOS(userAgent);
    switch (os) {
      case 'Android':
        setQrUrl(
          'https://play.google.com/store/apps/details?id=com.vietqr.product&referrer=utm_source%3Dgoogle%26utm_medium%3Dcpc%26anid%3Dadmob',
        );
        break;
      case 'iOS':
        setQrUrl('https://apps.apple.com/vn/app/vietqr-vn/id6447118484');
        break;
      case 'Macintosh':
        setQrUrl('https://apps.apple.com/vn/app/vietqr-vn/id6447118484');
        break;
      case 'Windows NT':
        setQrUrl(
          'https://play.google.com/store/apps/details?id=com.vietqr.product&referrer=utm_source%3Dgoogle%26utm_medium%3Dcpc%26anid%3Dadmob',
        );
        break;
      default:
        setQrUrl('/');
        break;
    }
  }, []);

  return (
    <Box
      sx={{
        display: {
          xxs: 'none',
          xs: 'none',
          sm: 'block',
          md: 'block',
        },
        ...containerStyle,
      }}
    >
      <Stack
        spacing={{ xxs: 0.5, xs: 0.5, sm: 1.5 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          ...stackStyle,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: {
              xxs: '1rem',
              xs: '2rem',
              md: '2rem',
              lg: 0,
            },
            width: '100%',
          }}
        >
          {list.map((item) => (
            <Button
              key={item.id}
              component="button"
              sx={{
                whiteSpace: 'nowrap',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50px',
                width: { xxs: '100px', xs: '100px', sm: '150px' },
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
                fontSize: { xxs: '11px', xs: '12px', sm: '14.5px' },

                '&::after': {
                  background: 'red',
                },
              }}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              className={`${styles.btn} ${qrState === t(item.name) ? styles.active : ''}`}
              onClick={() => handleClick(t(item.name))}
            >
              {t(item.name)}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: {
                xxs: 170,
                xs: 170,
                lg: 250,
                xl: 250,
              },
              minWidth: {
                xxs: 170,
                xs: 170,
                lg: 250,
                xl: 250,
              },
              minHeight: {
                xxs: 170,
                xs: 170,
                lg: 250,
                xl: 250,
              },
              marginLeft: {
                xxs: '0',
                xs: '0',
                md: '1rem',
                lg: '1rem',
                xl: '1rem',
              },
            }}
          >
            <QRCodeComponent
              value={
                selectedTab.current === t('downloadQR')
                  ? 'https://onelink.to/q7zwpe'
                  : encryptedQrValue.qrValue
              }
            />
          </Box>
          <Box
            sx={{
              width: {
                xxs: 190,
                xs: 190,
                lg: 200,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              {t('scanQR')}
            </Typography>
            <Typography
              sx={{
                width: {
                  lg: 270,
                },
                fontSize: '15px',
                color: '#6C6C6C',
                lineHeight: '1.5',
                margin: '1rem 0',
              }}
            >
              {t('scanQRDescription')}
            </Typography>
            <Link
              href={qrUrl}
              target="_blank"
              style={{
                textDecorationColor:
                  'linear-gradient(to right, #458BF8, #FF8021, #FF3751, #C958DB)',
              }}
            >
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
    </Box>
  );
}
