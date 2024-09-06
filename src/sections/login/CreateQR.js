// mui
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';
import { TextGradient } from '~/components/text';
import { useAppSelector } from '~/redux/hook';
import { getOS } from '~/utils/getOS';
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
  const [qrUrl, setQrUrl] = useState('');
  const { qr } = useAppSelector((store) => store.qr);
  const { qrValue } = qr;
  const [qrState, setQrState] = useState('loginQR');

  const handleClick = (option) => {
    setQrState(option.name);
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
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Stack
        spacing={{ xs: 0.5, sm: 1.5 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: {
            xs: '6rem',
            lg: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: {
              xs: '1rem',
              lg: 0,
            },
            width: '100%',
            mb: {
              md: '1.5rem !important', // just want to override the default margin bottom of the stack when the screen size is medium
            },
          }}
        >
          {list.map((item) => (
            <OptionButton
              handleClick={handleClick}
              qrState={qrState}
              item={item}
            />
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
                xs: 170,
                lg: 250,
              },
              minWidth: {
                xs: 170,
                lg: 250,
              },
              minHeight: {
                xs: 170,
                lg: 250,
              },
              marginLeft: {
                xs: '0',
                md: '1rem',
              },
            }}
          >
            <QRCodeComponent
              value={
                qrState === 'downloadQR'
                  ? 'https://onelink.to/q7zwpe'
                  : qrValue || ''
              }
            />
          </Box>
          <Box
            sx={{
              width: {
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
              href="https://onelink.to/q7zwpe"
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

function OptionButton({ qrState, handleClick, item }) {
  const t = useTranslations();
  return (
    <Button
      key={item.id}
      sx={{
        whiteSpace: 'nowrap',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: { xs: '100px', sm: '150px' },
        borderRadius: '10px',
        color: qrState === item.name ? '#00c6ff' : 'inherit',
        transition: 'width 0.3s ease, height 0.3s ease, transform 0.3s ease',
        backgroundColor: qrState === item.name ? 'transparent' : 'initial',
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
        fontSize: { xs: '12px', sm: '15px' },

        '&::after': {
          background: 'red',
        },
      }}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className={`${styles.btn} ${qrState === item.name ? styles.active : ''}`}
      onClick={() => handleClick(item)}
    >
      {t(item.name)}
    </Button>
  );
}
