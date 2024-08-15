/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslations } from 'next-intl';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { LoginInput } from '../input';

import { ButtonGradient } from '../button';
import PasswordInput from '../input/PasswordInput';

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
      .min(6, 'Password must be at least 6 characters')
      .max(6, 'Password must be at most 6 characters'),
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
                component="h1"
                variant="h5"
                sx={{
                  background: 'linear-gradient(to right, #00C6FF, #0072FF)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                {t('login')}
              </Typography>
            </Grid>
            <Grid item xs>
              <Button
                sx={{
                  borderRadius: '40px',
                  width: '150px',
                  height: '40px',
                  background:
                    'linear-gradient(to right, #e1efff 0%, #e5f9ff 100%)',
                  color: '#000000',
                  fontWeight: 'normal',
                  fontSize: '12px',
                  paddingLeft: '10px',
                }}
              >
                VietQR ID Card
              </Button>
            </Grid>
          </Grid>
          <LoginInput t={t} label={t('phoneNumber')} />
          <PasswordInput
            otherStyles={{
              marginBottom: '1rem',
            }}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ textAlign: 'left', marginBottom: '2rem' }}
          >
            {t('forgotPassword')}
          </Typography>
          <ButtonGradient
            type="submit"
            widthBtn="360px"
            heightBtn="50px"
            style={{ marginTop: '1rem', borderRadius: '100px' }}
          >
            {t('login')}
          </ButtonGradient>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontSize: '15px',
              background: 'linear-gradient(to right, #00C6FF, #0072FF)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('noAccount')}
          </Typography>
        </FormControl>
      </Box>
    </Container>
  );
}

export default FormLogin;
