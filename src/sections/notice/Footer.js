import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonGradient } from '~/components/button';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';

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
    icon: '494',
  },
  {
    icon: '495',
  },
];

export default function Footer() {
  const navigate = (url) => {
    window.location.href = url;
  };
return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ maxWidth: 112, maxHeight: 112 }}>
            <QRCodeComponent value="https://onelink.to/q7zwpe" />
          </Box>
          <Box>
            <Box>
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
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {buttonList.map((button) => (
                <Button
                  key={button}
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
                      src={`/images/image ${button.icon}.png`}
                      alt="image"
                      width={165.14}
                      height={40}
                    />
                  </Link>
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
            justifyContent: 'flex-end',
          }}
        >
          <Box sx={boxStyle}>
            <Box sx={textBoxStyle}>
              <Image
                quality={100}
                src="/images/image 487.png"
                width={30}
                height={30}
                alt="image 487"
              />
              <Typography>1900 6234</Typography>
            </Box>
            <Box sx={textBoxStyle}>
              <Image
                src="/images/image 489.png"
                width={30}
                height={30}
                alt="image 487"
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
                src="/images/image 487.png"
                width={30}
                height={30}
                alt="image 487"
              />
              <Typography>0922 333 636</Typography>
            </Box>
            <Box sx={textBoxStyle}>
              <Image
                src="/images/image 489.png"
                width={30}
                height={30}
                alt="image 487"
              />
              <Typography>itsupport@vietqr.vn</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Box>
            <ButtonGradient
              gradientColors={['#E1EFFF', '#E5F9FF']}
              style={{
                minWidth: 190,
                minHeight: 30,
                color: '#000000',
                width: '30%',
              }}
            >
              <Image
                src="/images/image 491.png"
                alt="image 491"
                width={20}
                height={20}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: 12,
                  },
                  whiteSpace: 'nowrap',
                  minWidth: 153,
                  minHeight: 15,
                  textTransform: 'none',
                }}
              >
                Tài liệu hướng dẫn sử dụng
              </Typography>
            </ButtonGradient>
          </Box>
          <Box>
            <ButtonGradient
              gradientColors={['#E1EFFF', '#E5F9FF']}
              style={{
                minWidth: 106,
                minHeight: 30,
                color: '#000000',
                width: '15%',
              }}
            >
              <Image
                src="/images/image 491.png"
                alt="image 491"
                width={20}
                height={20}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: 12,
                  },
                  whiteSpace: 'nowrap',
                  minWidth: 62,
                  minHeight: 15,
                  textTransform: 'none',
                }}
              >
                Tài liệu API
              </Typography>
            </ButtonGradient>
          </Box>
          <Box>
            <ButtonGradient
              gradientColors={['#E1EFFF', '#E5F9FF']}
              style={{
                minWidth: 150,
                minHeight: 30,
                color: '#000000',
                width: '30%',
              }}
            >
              <Image
                quality={100}
                src="/images/image 488.png"
                alt="image 488"
                width={30}
                height={30}
              />
              <Typography
                sx={{
                  fontSize: {
                    md: 12,
                  },
                  whiteSpace: 'nowrap',
                  minWidth: 106,
                  minHeight: 15,
                  textTransform: 'none',
                }}
              >
                Cộng đồng VietQR
              </Typography>
            </ButtonGradient>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
