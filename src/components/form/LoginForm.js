/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
// @mui
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

// import API
import loginAPI from '~/api/login/loginService';

// hooks
import { Controller, useForm } from 'react-hook-form';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import useLoginSocket from '~/hooks/useLoginSocket';

// utils
import decodeJwt from '~/utils/decodeJwt';
import { LoginFormSchema } from '~/utils/definitions';

// components
import { useCallback, useRef, useState } from 'react';
import { useAuthContext } from '~/contexts/AuthContext';

// styles
import styles from '~styles/Input.module.scss';

// others
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { phoneRegex } from '~/constants/phoneRegex';
import { useAppSelector } from '~/redux/hook';
import { ButtonGradient, ButtonSolid } from '../button';
import { TextGradient } from '../text';

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
  marginBottom: '0.5rem',
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
    clearErrors,
    setError,
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
  const passwordRef = watch('password', '');
  const phoneNoBorder = '1px solid #E0E0E0';
  const { qr } = useAppSelector((state) => state.qr);

  const handleComplete = useCallback((field, value) => {
    setIsCompleted((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }, []);

  const handleInputChange = useCallback(
    (event) => {
      // Remove any non-digit characters
      event.target.value = event.target.value.replace(/\D/g, '');
      // Limit the input to 10 characters
      if (event.target.value.length > 10) {
        event.target.value = event.target.value.slice(0, 10);
      }
      if (!event.target.value) {
        clearErrors('phoneNo');
        handleComplete('phoneNo', false);
      }
      if (
        event.target.value.length === 10 &&
        event.target.value.match(phoneRegex)
      ) {
        handleComplete('phoneNo', true);
      }
      if (event.target.value.length < 10) {
        handleComplete('phoneNo', false);
      }
      phoneNoRef.current.value = event.target.value;
    },
    [handleComplete],
  );

  const handlePasswordChange = useCallback(
    (event) => {
      event.target.value = event.target.value.replace(/\D/g, '');
      if (event.target.value.length > 6) {
        event.target.value = event.target.value.slice(0, 6);
      }
      if (event.target.value.length === 6) {
        handleComplete('password', true);
      }
      if (event.target.value.length < 6) {
        handleComplete('password', false);
      }
      if (passwordRef.current) {
        passwordRef.current.value = event.target.value;
      }
    },
    [handleComplete],
  );

  const handleClearInput = useCallback(() => {
    setValue('phoneNo', '');
    setValue('password', '');
    handleComplete('phoneNo', false);
    clearErrors('phoneNo');
    clearErrors('password');
    phoneNoRef.current.focus();
  }, [setValue, handleComplete, clearErrors]);

  const phoneNoError =
    phoneNoRef.current?.value.length !== 0 && !!errors?.phoneNo;

  const showErrorMessage = !!errors.phoneNo || !!errors.password;

  const onSubmit = useCallback(
    async (formData) => {
      if (!formData.phoneNo || !formData.password) {
        if (!formData.phoneNo) {
          setError('phoneNo', {
            type: 'manual',
            message: t('phoneNoRequired'),
          });
        }

        if (!formData.password) {
          setError('password', {
            type: 'manual',
            message: t('passwordRequired'),
          });
        }

        return;
      }
      try {
        // Call API to login
        await loginAPI
          .login(formData.phoneNo, formData.password)
          .then((res) => {
            // console.log(res);
            const { status, data } = res;
            if (status === 200) {
              authenticate(data);
              const info = decodeJwt(data);
              if (info) setStoredValue(info);
            }
            if (status === 400) {
              setError('phoneNo', {
                type: 'manual',
                message: t('invalidPhone&Password'),
              });
              setValue('password', '');
            }
          });
      } catch (error) {
        setError('phoneNo', {
          type: 'manual',
          message: t('invalidPhone&Password'),
        });
      }
    },
    [isCompleted, authenticate, setStoredValue, setValue, t],
  );

  const onSubmitQR = useCallback(async (data) => {
    try {
      // console.log(data);
      await loginAPI.loginQR(data.userId).then((res) => {
        // console.log(res);
        const { status, data: qrData } = res;
        if (status === 200) {
          authenticate(qrData);
          const info = decodeJwt(qrData);
          if (info) setStoredValue(info);
          // console.log(qrData);
        }
      });
    } catch (error) {
      setError(error);
    }
  }, []);

  useLoginSocket(qr.loginID, qr.randomKey, onSubmitQR);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: {
          xs: '100%',
          md: '100%',
          lg: '50%',
        },
        ...containerStyle,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2.5}
          sx={{
            width: 'fit-content',
            alignItems: 'center',
            ...stackStyle,
          }}
        >
          <Box
            sx={{
              alignSelf: {
                xs: 'flex-start',
                md: 'center',
                lg: 'flex-start',
              },
            }}
          >
            <TextGradient>{t('login')}</TextGradient>
          </Box>
          <Controller
            name="phoneNo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '33%',
                    margin: '0 1rem',
                  }}
                >
                  <PhoneOutlinedIcon
                    sx={{
                      color: 'grey',
                      width: '30px',
                      height: '30px',
                      objectFit: 'cover',
                      padding: '7px',
                      marginRight: '5px',
                      position: 'absolute',
                      zIndex: 1,
                    }}
                  />
                </Box>
                <TextField
                  {...field}
                  inputRef={phoneNoRef}
                  label={t('phoneNo')}
                  variant="outlined"
                  error={!!errors?.phoneNo || phoneNoError}
                  helperText={
                    !!errors?.phoneNo || phoneNoError
                      ? errors.phoneNo?.message || ''
                      : ''
                  }
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
                        borderColor: phoneNoBorder,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: phoneNoBorder,
                      },
                      '& .MuiOutlinedInput-input': {
                        paddingLeft: '50px',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      paddingLeft: '50px',
                    },
                    '& .MuiInputLabel-shrink': {
                      paddingLeft: '0px',
                      transition: 'all 0.2s ease-in-out',
                    },
                    '& .MuiFormHelperText-root': {
                      transition: 'all 0.2s ease-in-out',
                      opacity: showErrorMessage ? 1 : 0,
                      visibility: showErrorMessage ? 'visible' : 'hidden',
                      position: 'absolute',
                      bottom: '-20px',
                      transform: 'translateY(50%)',
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
                            '&:hover': {
                              opacity: 1,
                            },
                          }}
                        />
                      </InputAdornment>
                    ) : null,
                  }}
                  aria-required="true"
                />
              </Box>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Box
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
                  helperText={errors?.password?.message}
                  required
                  onInput={handlePasswordChange}
                  sx={{
                    ...passwordStyle,
                    '& .MuiInputLabel-shrink': {
                      paddingLeft: '0px',
                      transition: 'all 0.2s ease-in-out',
                    },
                    '& .MuiFormHelperText-root': {
                      transition: 'all 0.2s ease-in-out',
                      opacity: showErrorMessage ? 1 : 0,
                      visibility: showErrorMessage ? 'visible' : 'hidden',
                      position: 'absolute',
                      bottom: '-25px',
                    },
                  }}
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
                  // {...{ disabled: !isCompleted.phoneNo }}
                />
                <Box
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
                      key={index}
                      className={`${styles.circle} ${
                        passwordRef.length > index ? styles.filled : ''
                      }`}
                      sx={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor:
                          passwordRef.length > index ? 'blue' : 'lightgray',
                        margin: '2px',
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
            sx={{
              alignSelf: {
                xs: 'flex-start',
                md: 'center',
                lg: 'flex-start',
              },
              marginBottom: '1rem',
            }}
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
                      'linear-gradient(to right, #F0F4FA 50%, #F0F4FA 100%)',
                    color: '#000',
                  }),
            }}
            // {...{ disabled: isButtonDisabled() }}
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
      </form>
    </Box>
  );
}
