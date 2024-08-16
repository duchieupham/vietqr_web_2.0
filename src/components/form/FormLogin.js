/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// eslint-disable-next-line object-curly-newline
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ButtonGradient } from '../button';
import { InputPassword, InputLogin } from '../input';

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .min(10, 'Số điện thoại phải có đủ 10 số')
      .max(10, 'Số điện thoại phải có đủ 10 số digits')
      .required('Phone number is required')
      .matches(
        /^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        'Vui lòng nhập đúng số điện thoại !',
      ),
    password: yup
      .string()
      .trim()
      .max(6, 'Mật khẩu phải có đúng 6 ký tự')
      .min(6, 'Mật khẩu phải có đúng 6 ký tự')
      .matches(/^\d{6}$/, 'Password must be exactly 6 digits')
      .required('Vui lòng nhập mật khẩu !'),
  })
  .required();

function FormLogin() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const t = useTranslations();

  // Submit form
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          sx={{
            marginLeft: '3rem',
          }}
        >
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
        <InputLogin
          label="phoneNumber"
          t={t}
          register={register}
          watch={watch}
          errors={errors}
          trigger={trigger}
          otherStyles={{ marginBottom: '1rem' }}
        />
        <InputPassword
          register={register}
          t={t}
          label="password"
          watch={watch}
          errors={errors}
          othersStyle={{ marginBottom: '1rem' }}
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
          style={{
            marginTop: '1rem',
            borderRadius: '100px',
            width: '360px',
            height: '50px',
          }}
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
      </Box>
    </Container>
  );
}

export default FormLogin;
