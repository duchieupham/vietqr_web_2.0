/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// import API
import loginAPI from '~/api/login/loginService';

// import hooks
import { Controller, useForm } from 'react-hook-form';
import { useLocalStorage } from '~/hooks/useLocalStorage';

// utils
import { LoginFormSchema } from '~/utils/definitions';
import decodeJwt from '~/utils/decodeJwt';

// components
import { useAuthContext } from '~/contexts/AuthContext';
import { useRef, useState } from 'react';

// styles
import styles from '~styles/Input.module.scss';

// others
import { TextGradient } from '../text';
import { ButtonGradient, ButtonSolid } from '../button';

const inputStyle = {
  width: '360px',
  border: '1px solid #E0E0E0',
  borderRadius: '20px',
  outline: 'none',
  borderColor: 'transparent',
  margin: '1rem 0',
  '& .MuiInputBase-input': {
    borderRadius: '10px',
  },
  '& .MuiOutlinedInput-root': {
    height: '50px', // Set the height of the TextField
    borderRadius: '10px',
    '& fieldset': {
      border: '1px solid #E0E0E0',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: '#0072ff', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0072ff', // Border color when focused
      borderRadius: '10px',
    },
  },
  '& .MuiOutlinedInput-input': {
    height: '100%', // Ensure the input field takes up the full height
    padding: 'auto 16px', // Adjust padding to center the text vertically
    boxSizing: 'border-box', // Ensure padding doesn't affect overall height
    borderRadius: '10px !important',
    width: '360px',
    marginRight: '-22px',
  },
  '& .MuiInputLabel-root': {
    top: '-5px',
    alignItems: 'center', // Align the label text with the input
    justifyContent: 'center', // Align the label text with the input
    display: 'flex', // Align the label text with the input
    fontSize: '1rem', // Adjust the label font size
    lineHeight: '30px', // Ensure the label aligns with the input height
  },
};

const passwordStyle = {
  width: '360px',
  position: 'relative',
  border: '1px solid #E0E0E0',
  borderColor: 'transparent',
  outline: 'none',
  borderRadius: '20px',
  '& .MuiOutlinedInput-root': {
    height: '50px',
    '& fieldset': {
      border: '1px solid #E0E0E0',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: '#0072ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0072ff',
    },
    '& .MuiOutlinedInput-input': {
      color: 'transparent',
      textShadow: '0 0 0 #000',
      position: 'relative',
      zIndex: 1,
      '&::selection': {
        background: 'transparent',
      },
    },
    '&.Mui-disabled fieldset': {
      borderColor: '#E0E0E0',
      '& .MuiOutlinedInput-input': {
        position: 'absolute',
        opacity: 0,
        width: '100%',
        height: '100%',
      },
    },
  },
  '& .MuiOutlinedInput-input': {
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'text',
  },
};

export default function LoginForm({ containerStyle, stackStyle }) {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: 'onChange',
  });
  const t = useTranslations();
  const { authenticate } = useAuthContext();
  const [storedValue, setStoredValue] = useLocalStorage('session', '');
  const [isCompleted, setIsCompleted] = useState({});
  const phoneNoRef = useRef(null);
  const phoneNoValue = watch('phoneNo', '');
  const passwordRef = useRef(null);
  const passwordInput = watch('password', '');
  let phoneNoBorder = '1px solid #E0E0E0';
  let phoneNoBorderColor = '1px solid #E0E0E0';

  const onSubmit = async (formData) => {
    if (isCompleted?.phoneNo && isCompleted?.password) {
      // Call API to login
      await loginAPI.login(formData.phoneNo, formData.password).then((res) => {
        const { status, data } = res;
        if (status === 200) {
          authenticate(data);
          const info = decodeJwt(data);
          if (info) setStoredValue(info);
        }
      });
    }
  };

  const handleComplete = (field, value) => {
    setIsCompleted((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleInputChange = (event) => {
    // Remove any non-digit characters
    event.target.value = event.target.value.replace(/\D/g, '');
    // Limit the input to 10 characters
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
    if (event.target.value.length === 10) {
      handleComplete('phoneNo', true);
    }
    if (event.target.value.length < 10) {
      handleComplete('phoneNo', false);
    }
    phoneNoRef.current.value = event.target.value;
  };
  const handlePasswordChange = (event) => {
    // Remove any non-digit characters
    event.target.value = event.target.value.replace(/\D/g, '');
    // Limit the input to 6 characters
    if (event.target.value.length > 6) {
      event.target.value = event.target.value.slice(0, 6);
    }
    if (event.target.value.length === 6) {
      handleComplete('password', true);
    }
    if (event.target.value.length < 6) {
      handleComplete('password', false);
    }
    if (passwordInput.current) {
      passwordInput.current.value = event.target.value;
    }
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.opacity = 0.8;
  };

  const handleClearInput = () => {
    setValue('phoneNo', '');
    setValue('password', '');
    handleComplete('phoneNo', false);
    phoneNoRef.current.focus();
  };

  const phoneNoError =
    phoneNoRef.current?.value.length === 0 ? false : !!errors?.phoneNo;

  const phoneNoHelperText =
    phoneNoRef.current?.value.length === 0 ? false : !!errors?.phoneNo;

  if (phoneNoRef.current?.value.length !== 0) {
    phoneNoBorder = errors?.phoneNo ? '1px solid red' : '1px solid #E0E0E0';
    phoneNoBorderColor = errors?.phoneNo ? 'red' : '#0072ff';
  }

  return (
    <Container
      sx={{
        maxWidth: '100%',
        ...containerStyle,
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            ...stackStyle,
          }}
        >
          <Box component="div">
            <TextGradient>{t('login')}</TextGradient>
          </Box>
          <Controller
            name="phoneNo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                inputRef={phoneNoRef}
                label={t('phoneNo')}
                variant="outlined"
                error={phoneNoError}
                helperText={phoneNoHelperText}
                onInput={handleInputChange}
                required
                sx={{
                  ...inputStyle,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: phoneNoBorder,
                      borderRadius: '10px',
                    },
                    '&:hover fieldset': {
                      borderColor: phoneNoBorderColor,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: phoneNoBorderColor,
                    },
                  },
                }}
                InputProps={{
                  maxLength: 10,
                  endAdornment: phoneNoValue ? (
                    <InputAdornment position="end">
                      <CloseIcon
                        onClick={handleClearInput}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          position: 'absolute',
                          right: '20px',
                          opacity: 0.8,
                          backgroundColor: 'inherit',
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                      />
                    </InputAdornment>
                  ) : null,
                }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Box
                component="div"
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <TextField
                  {...field}
                  hiddenLabel
                  id="password"
                  type="password"
                  error={!!errors?.password}
                  helperText={errors?.password?.message || ''}
                  required
                  onInput={handlePasswordChange}
                  sx={{ ...passwordStyle }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon
                          sx={{
                            color: 'grey',
                            width: '30px',
                            height: '30px',
                            objectFit: 'cover',
                            padding: '7px',
                            marginRight: '5px',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="current-password"
                  {...{ disabled: !isCompleted.phoneNo }}
                />
                <Box
                  component="div"
                  className={styles.circles}
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  {[...Array(6)].map((_, index) => (
                    <Box
                      component="div"
                      key={index}
                      className={`${styles.circle} ${
                        passwordInput.length > index ? styles.filled : ''
                      }`}
                      sx={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor:
                          passwordInput.length > index ? 'blue' : 'lightgray',
                        margin: '2px',
                        zIndex: 10,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}
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
              ...(isCompleted.phoneNo && isCompleted.password
                ? {}
                : {
                    backgroundImage:
                      'linear-gradient(to right, #e1efff 50%, #e5f9ff 100%)',
                    color: '#000',
                  }),
            }}
            {...{ disabled: !(isCompleted.phoneNo && isCompleted.password) }}
          >
            {t('login')}
          </ButtonGradient>
          <ButtonSolid
            style={{
              backgroundColor: 'transparent',
              width: '360px',
              backgroundImage: 'linear-gradient(to right, #00C6FF, #0072FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '500',
              fontSize: '15px',
            }}
            disableRipple
          >
            {t('register')}
          </ButtonSolid>
        </Stack>
      </Box>
    </Container>
  );
}
