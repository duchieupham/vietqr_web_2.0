import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import imagesAPI from '~/api/images/imagesService';
import { CarouselSlider, Contact, Social } from '~/sections/login/footer';

function FooterLogin() {
  const [bankType, setBankType] = useState([]);

  const bankTypeList = async () => {
    try {
      const res = await imagesAPI.bankTypeList();
      // console.log('API Response:', res.data); // Debugging
      setBankType(res.data);
    } catch (error) {
      // console.error('Error fetching bank types:', error);
    }
  };

  useEffect(() => {
    bankTypeList();
  }, []);

  return (
    <Box
      sx={{
        px: {
          xxs: 0,
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
            xxs: 'column',
            md: 'row',
          },
          alignItems: {
            xxs: 'center',
            lg: 'flex-start',
          },
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Contact
            style={{
              flexWrap: {
                xxs: 'wrap',
                md: 'nowrap',
              },
            }}
            stackStyle={{
              margin: {
                xxs: '0 1rem',
                xs: '0 2rem',
                sm: '0 3rem',
              },
              whiteSpace: 'nowrap',
              flexGrow: 1,
              marginBottom: {
                xxs: '0.5rem',
                xs: '0.7rem',
                sm: '1rem',
                md: '0.5rem',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Social />
        </Grid>
      </Grid>
      <Box sx={{}}>
        <CarouselSlider initialValues={bankType} />
      </Box>
    </Box>
  );
}
export default FooterLogin;
