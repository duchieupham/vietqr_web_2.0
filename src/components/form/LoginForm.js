/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '~/contexts/AuthContext';
import loginAPI from '~/api/login/loginService';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import { LoginFormSchema } from '~/utils/definitions';
import { InputPassword, InputLogin } from '../input';
import { ButtonGradient } from '../button';
import { TextGradient } from '../text';

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  });
  const t = useTranslations();
  const { login } = useAuthContext();

  // Submit form
  const onSubmit = async (formData) => {
    // console.log(formData);
    const userAgent = window?.navigator.userAgent;
    const loginData = await loginAPI.login(
      formData.phoneNo,
      formData.password,
      userAgent,
    );
    // console.log(loginData);
    // Call API to login
    await loginAPI.login(formData.phoneNo, formData.password).then((res) => {
      console.log(res);
      if (res.status === 200) {
        login(res.data);
      }
    });
    // login('admin');
  };

  return (
    <Container
      sx={{
        maxWidth: '100%',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginY: 0,
          marginX: 'auto',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '6rem',
          }}
          justifyContent="space-between"
        >
          <Grid item xs>
            <TextGradient text={t('login')} />
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
              <ContactEmergencyOutlinedIcon
                sx={{
                  fontWeight: '400',
                  color: '#000000.2',
                  padding: '5px',
                  marginRight: '3px',
                }}
              />
              VietQR ID Card
            </Button>
          </Grid>
        </Grid>
        <InputLogin
          label="phoneNo"
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
          style={{ textAlign: 'left', marginBottom: '1rem' }}
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
        <TextGradient
          text={t('noAccount')}
          otherStyles={{
            fontSize: '15px',
            marginTop: '1rem',
          }}
        />
      </Box>
    </Container>
  );
}
