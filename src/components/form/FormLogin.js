/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import * as yup from 'yup';
import { Box, Container, FormControl, Grid, TextField, Typography } from '@mui/material';
import { ButtonGradient } from '../button';
import { LoginInput } from '../input';

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(
        /(?:\+84|0084|0)[235789][0-9]{1, 2}[0-9]{7}(?:[^\d]+|$)/g,
        'Invalid phone number',
      ),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  .required();

function FormLogin() {
  const t = useTranslations();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormControl
          defaultValue={{
            phoneNumber: '',
            password: '',
          }}
          required
          sx={{}}
        >
          <Grid container>
            <Grid item xs>
              <Typography
              component='h1' 
              variant='h5'
              >
                {t('login')}
              </Typography>
            </Grid>
          </Grid>
          <Typography component="h1" variant="h5">
            {t('login')}
          </Typography>
          <LoginInput t={t} label={t('phoneNumber')} />
          <LoginInput t={t} label={t('password')} />
          <ButtonGradient
            type="submit"
            borderRadiusBtn="40px"
            widthBtn="360px"
            heightBtn="50px"
            sx={{ marginTop: '1rem' }}
          >
            {t('login')}
          </ButtonGradient>
        </FormControl>
      </Box>
    </Container>
  );
}

export default FormLogin;
