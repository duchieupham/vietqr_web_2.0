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
import useLoginSocket from '~/hooks/useLoginSocket';

// utils
import { LoginFormSchema } from '~/utils/definitions';

// components
import { useEffect, useState } from 'react';
import { useAuthContext } from '~/contexts/AuthContext';

// styles
import styles from '~styles/Input.module.scss';

// others
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { ButtonGradient, ButtonSolid } from '~/components/button';
import { TextGradient } from '~/components/text';
import { useAppSelector } from '~/redux/hook';

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
  '& .MuiOutlinedInput-input': {
    height: '100%', // Ensure the input field takes up the full height
    padding: 'auto 16px', // Adjust padding to center the text vertically
    boxSizing: 'border-box', // Ensure padding doesn't affect overall height
    borderRadius: '10px !important',
    width: '360px',
    marginRight: '-22px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: '#0072ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0072ff',
    },
    '& .MuiOutlinedInput-input': {
      paddingLeft: '50px',
    },
  },
  '& .MuiInputLabel-root': {
    paddingLeft: '40px',
  },
  '& .MuiInputLabel-shrink': {
    paddingLeft: '0px',
    transition: 'all 0.2s ease-in-out',
  },
  '& .MuiFormHelperText-root': {
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(50%)',
    mt: -1,
    whiteSpace: 'nowrap',
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
  const [isCompleted, setIsCompleted] = useState({});
  const phoneNoValue = watch('phoneNo', '');
  const passwordValue = watch('password', '');

  const handleComplete = (field, value) => {
    setIsCompleted((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleClearInput = () => {
    setValue('phoneNo', '');
    setValue('password', '');
    handleComplete('phoneNo', false);
    clearErrors('phoneNo');
    clearErrors('password');
  };

  const phoneNoError =
    phoneNoValue.current?.value.length !== 0 && !!errors?.phoneNo;

  const onSubmit = async (formData) => {
    if (!formData.phoneNo || !formData.password) {
      // TODO: Use yup error. No need set error manually
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
      await loginAPI.login(formData.phoneNo, formData.password).then((res) => {
        // console.log(res);
        const { status, data } = res;
        if (status === 200) {
          authenticate(data);
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
  };

  const onSubmitQR = async (data) => {
    try {
      await loginAPI.loginQR(data.userId).then((res) => {
        const { status, data: qrData } = res;
        if (status === 200) {
          authenticate(qrData);
          // console.log(qrData);
        }
      });
    } catch (error) {
      setError(error);
    }
  };

  useLoginSocket({
    onSuccess: onSubmitQR,
  });

  // useEffect(() => {
  //   if (phoneNoValue === 10 && passwordValue.length === 6) {
  //     handleSubmit(onSubmit)();
  //   }
  // }, [passwordValue, handleSubmit]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: {
          xs: '100%',
          lg: '47%',
        },
        ...containerStyle,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            alignSelf: 'flex-start',
          }}
        >
          <TextGradient>{t('login')}</TextGradient>
        </Box>
        <Stack
          spacing={1}
          sx={{
            width: 'fit-content',
            alignItems: 'center',
            ...stackStyle,
          }}
        >
          <Controller
            name="phoneNo"
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
                    left: '10px',
                    top: errors?.phoneNo ? '45%' : '50%',
                    transform: 'translateY(-50%)',
                    justifyContent: 'center',
                  }}
                />
                <TextField
                  {...field}
                  label={t('phoneNo')}
                  variant="outlined"
                  error={!!errors?.phoneNo || phoneNoError}
                  helperText={
                    !!errors?.phoneNo || phoneNoError
                      ? errors.phoneNo?.message || ''
                      : ''
                  }
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
                      paddingLeft: '40px',
                    },
                    '& .MuiInputLabel-shrink': {
                      paddingLeft: '0px',
                      transition: 'all 0.2s ease-in-out',
                      borderRadius: '10px',
                      backgroundClip: 'transparent',
                    },
                    '& .MuiFormHelperText-root': {
                      transition: 'all 0.2s ease-in-out',
                      opacity: errors?.phoneNo ? 1 : 0,
                      visibility: errors?.phoneNo ? 'visible' : 'hidden',
                      transform: 'translateY(50%)',
                      mt: -1,
                      whiteSpace: 'nowrap',
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
                  sx={{
                    ...passwordStyle,
                    '& .MuiInputLabel-shrink': {
                      paddingLeft: '0px',
                      transition: 'all 0.2s ease-in-out',
                    },
                    '& .MuiFormHelperText-root': {
                      transition: 'all 0.2s ease-in-out',
                      opacity: errors?.password ? 1 : 0,
                      visibility: errors?.password ? 'visible' : 'hidden',
                      transform: 'translateY(50%)',
                      mt: -1,
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
                  onChange={(e) => {
                    if (e.target.value.length > 6) {
                      e.target.value = e.target.value.slice(0, 6);
                    }
                    field.onChange(e);
                  }}
                />
                <Box
                  className={styles.circles}
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: errors?.password ? '38%' : '43.5%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  {[...Array(6)].map((_, index) => (
                    <Box
                      key={index}
                      className={`${styles.circle} ${
                        passwordValue.length > index ? styles.filled : ''
                      }`}
                      sx={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor:
                          passwordValue.length > index ? 'blue' : 'lightgray',
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
              cursor: 'pointer',
              ':hover': {
                opacity: 0.8,
              },
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
              backgroundImage:
                errors.phoneNo || errors.password
                  ? 'linear-gradient(to right, #F0F4FA 50%, #F0F4FA 100%)'
                  : 'linear-gradient(to right, #0072ff, #00c6ff)',
              color: errors.phoneNo || errors.password ? '#000' : '#fff',
            }}
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
