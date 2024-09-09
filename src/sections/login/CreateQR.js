// mui
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';
import { TextGradient } from '~/components/text';
import { useAppSelector } from '~/redux/hook';
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
  const { qr } = useAppSelector((store) => store.qr);
  const [qrState, setQrState] = useState('loginQR');

  const handleClick = (option) => {
    setQrState(option.name);
  };

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
              key={item.id}
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
                qrState === 'loginQR' ? qr.qrValue : 'https://onelink.to/q7zwpe'
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
              {qrState === 'downloadQR' ? t('scanQR2') : t('scanQR')}
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
              {qrState === 'downloadQR'
                ? t('scanQRDescription2')
                : t('scanQRDescription')}
            </Typography>
            <Link
              href="https://onelink.to/q7zwpe"
              target="_blank"
              style={{
                textDecoration: 'none',
              }}
            >
              <TextGradient
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #458BF8, #FF8021, #FF3751, #C958DB)',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  width: 'fit-content',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px', // Adjust height as needed for the underline
                    background:
                      'linear-gradient(to right, #458BF8, #FF8021, #FF3751, #C958DB)',
                    zIndex: -1, // Ensure the gradient underline is behind the text
                    borderRadius: '2px', // Optional: Adds rounded corners to the underline
                  },
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
