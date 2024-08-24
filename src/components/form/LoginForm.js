import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '~/utils/definitions';

// import next

// import mui

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// import API
import loginAPI from '~/api/login/loginService';

// import hooks
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '~/hooks/useLocalStorage';

// utils
import decodeJwt from '~/utils/decodeJwt';

// import components
import { useAuthContext } from '~/contexts/AuthContext';
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
  const { authenticate } = useAuthContext();
  const [storedValue, setStoredValue] = useLocalStorage('session', '');

  const onSubmit = async (formData) => {
    // Call API to login
    await loginAPI.login(formData.phoneNo, formData.password).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        authenticate(data);
        const info = decodeJwt(data);
        if (info) setStoredValue(info);
      }
    });
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
            <TextGradient>{t('login')}</TextGradient>
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
        <TextGradient
          otherStyles={{
            backgroundImage:
              'linear-gradient(to right, #458bf8, #ff8021, #ff3751, #c958db)',
            fontSize: '15px',
            fontWeight: '400',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(to right, #458bf8, #ff8021, #ff3751, #c958db)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              zIndex: -1,
            },
          }}
        >
          <AutoAwesomeIcon
            sx={{
              backgroundImage:
                'linear-gradient(to right, #458bf8, #ff8021, #ff3751, #c958db)',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'unset',
              fontSize: '15px',
              marginRight: '5px',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          Quét mã QR để đăng nhập vào website
        </TextGradient>
      </Box>
    </Container>
  );
}
