import { Box, Button, Grid, Typography } from '@mui/material';
import QRCodeComponent from '~/components/qr-component/QRCodeComponent';

const spanStyle = {
  borderLeft: '1px solid #dadada',
  height: 18,
  alignItems: 'center',
  display: 'flex',
  marginBottom: 10,
};

const boxStyle = {
  display: 'flex',
  gap: 2,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignContents: 'flex-end',
};
export default function Footer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ maxWidth: 112, maxHeight: 112 }}>
            <QRCodeComponent value="https://onelink.to/q7zwpe" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xxs: 15,
                  md: 20,
                },
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Quét mã QR để tải ứng dụng
            </Typography>
            <Typography>
              Tải ứng dụng VietQR trên điện thoại của bạn bằng cách quét mã QR.
            </Typography>
          </Box>
          <Box>
            <Button></Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            p: 1,
          }}
        >
          <Box sx={boxStyle}>
            <Typography>1900 6234</Typography>
            <Typography>sales@vietqr.vn</Typography>
          </Box>
          <Box sx={boxStyle}>
            <span style={spanStyle} />
            <span style={spanStyle} />
          </Box>
          <Box sx={boxStyle}>
            <Typography>0922 333 636</Typography>
            <Typography>itsupport@vietqr.vn</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
