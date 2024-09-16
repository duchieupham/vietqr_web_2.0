import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonGradient } from '~/components/button';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';
import theme from '~/theme';

const spanStyle = {
  borderLeft: '2px solid #dadada',
  height: 18,
};

const boxStyle = {
  display: 'flex',
  gap: 0.5,
  flexDirection: 'column',
};

const textBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const buttonList = [
  {
    id: 1,
    icon: '/images/AppleStore.png',
  },
  {
    id: 2,
    icon: '/images/CHPlayStore.png',
  },
];

export default function Footer() {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: 112, maxHeight: 112 }}>
            <QRCodeComponent value="https://onelink.to/q7zwpe" />
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                p: {
                  xs: 2,
                  sm: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    md: 20,
                  },
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                Quét mã QR để tải ứng dụng
              </Typography>
              <Typography>
                Tải ứng dụng VietQR trên điện thoại của bạn bằng cách quét mã
                QR.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                justifyContent: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              {buttonList.map((button) => (
                <Button
                  key={button.id}
                  disableRipple
                  sx={{
                    p: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Link target="_blank" href="https://onelink.to/q7zwpe">
                    <Image
                      src={button.icon}
                      alt="image"
                      width={165.14}
                      height={40}
                      loading="lazy"
                    />
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            pr: { xs: 1, lg: 6 },
            mb: { xs: 6, sm: 0 },
          }}
        >
          {/* Contact */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 2,
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Box sx={boxStyle}>
              <Box sx={textBoxStyle}>
                <Image
                  quality={100}
                  src="/images/phone.png"
                  width={30}
                  height={30}
                  alt="phone"
                  loading="lazy"
                />
                <Typography>1900 6234</Typography>
              </Box>
              <Box sx={textBoxStyle}>
                <Image
                  src="/images/mail.png"
                  width={30}
                  height={30}
                  alt="mail"
                  loading="lazy"
                />
                <Typography>sales@vietqr.vn</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                ...boxStyle,
                display: 'flex',
                justifyContent: 'space-between',
                mb: 0.2,
              }}
            >
              <Box>
                <span
                  style={{
                    ...spanStyle,
                  }}
                />
              </Box>
              <Box>
                <span style={spanStyle} />
              </Box>
            </Box>
            <Box sx={boxStyle}>
              <Box sx={textBoxStyle}>
                <Image
                  src="/images/phone.png"
                  width={30}
                  height={30}
                  alt="image 487"
                  loading="lazy"
                />
                <Typography>0922 333 636</Typography>
              </Box>
              <Box sx={textBoxStyle}>
                <Image
                  src="/images/mail.png"
                  width={30}
                  height={30}
                  alt="image 487"
                  loading="lazy"
                />
                <Typography>itsupport@vietqr.vn</Typography>
              </Box>
            </Box>
          </Box>
          {/* Document */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              gap: 2,
              mr: { xs: -2, sm: 0 },
            }}
          >
            <Box>
              <ButtonGradient
                style={{
                  width: isMdUp ? 190 : 106,
                  minHeight: 30,
                  color: '#000000',
                  background: 'linear-gradient(to right, #E1EFFF, #E5F9FF)',
                }}
              >
                <Image
                  src="/images/image 491.png"
                  alt="image 491"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontSize: {
                      md: 12,
                    },
                    whiteSpace: 'nowrap',
                    minHeight: 15,
                    textTransform: 'none',
                  }}
                >
                  {isMdUp ? 'Tài liệu hướng dẫn sử dụng' : 'HDSD'}
                </Typography>
              </ButtonGradient>
            </Box>
            <Box>
              <ButtonGradient
                style={{
                  width: isMdUp ? 106 : 84,
                  minHeight: 30,
                  color: '#000000',
                  background: 'linear-gradient(to right, #E1EFFF, #E5F9FF)',
                }}
              >
                <Image
                  src="/images/image 491.png"
                  alt="image 491"
                  width={20}
                  height={20}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontSize: {
                      md: 12,
                    },
                    whiteSpace: 'nowrap',
                    maxWidth: 62,
                    minHeight: 15,
                    textTransform: 'none',
                  }}
                >
                  {isMdUp ? 'Tài liệu API' : 'API'}
                </Typography>
              </ButtonGradient>
            </Box>
            <Box>
              <ButtonGradient
                style={{
                  width: 150,
                  minHeight: 30,
                  color: '#000000',
                  background: 'linear-gradient(to right, #E1EFFF, #E5F9FF)',
                }}
              >
                <Image
                  quality={100}
                  src="/images/telegram.png"
                  alt="image 488"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontSize: {
                      md: 12,
                    },
                    whiteSpace: 'nowrap',
                    maxWidth: 106,
                    minHeight: 15,
                    textTransform: 'none',
                  }}
                >
                  {isMdUp ? 'Cộng đồng VietQR' : 'Cộng đồng'}
                </Typography>
              </ButtonGradient>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
