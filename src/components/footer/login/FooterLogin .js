import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import imagesAPI from '~/api/images/imagesService';
import { CarouselSlider, Contact, Social } from '~/sections/login/footer';

function Footer() {
  const [bankType, setBankType] = useState([]);

  const bankTypeList = async () => {
    const res = await imagesAPI.bankTypeList();
    setBankType(res.data);
  };

  useEffect(() => {
    bankTypeList();
  }, []);

  return (
    <Box
      sx={{
        px: {
          xs: 0,
        },
        pt: {
          xxl: '1.5rem',
        },
      }}
    >
      <Grid
        container
        item
        columns={12}
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: {
            xs: 'center',
            lg: 'flex-start',
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Contact
            style={{
              flexWrap: {
                xs: 'wrap',
                md: 'nowrap',
              },
            }}
            stackStyle={{
              margin: {
                xs: '0 1rem',
                sm: '0 3rem',
              },
              whiteSpace: 'nowrap',
              flexGrow: 1,
              marginBottom: {
                xs: '0.5rem',
                sm: '1rem',
                md: '0.5rem',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Social />
        </Grid>
      </Grid>
      <Box>
        {bankType.length > 0 && <CarouselSlider initialValues={bankType} />}
      </Box>
    </Box>
  );
}
export default Footer;
