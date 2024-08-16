/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from '~styles/Input.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import listApi from '~/api/listServices';
import loginAPI from '~/api/login/loginService';
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
  const { handleSubmit, register } = useForm();
  const t = useTranslations();
  const [phoneNumberError, setPhoneNumberError] = useState({
    status: false,
    message: '',
  });
  const [passwordError, setPasswordError] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (loginAPI.checkExist(e.target.value)) {
      // setPhoneNumberError({
      //   status: true,
      //   message: 'Phone number is not exist',
      // });
      console.log(e.target.value);
      console.log('Phone number is not exist');
    }
  };

  const clearInput = () => {
    setInputValue('');
  };

  // Password
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const hasError = useMemo(() => value === 'error', [value]);

  const handlePasswordChange = (e) => setPassword(e.target.value);

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
        <Grid container justifyContent="space-between">
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
        <TextField
          variant="outlined"
          label={t('phoneNumber')}
          name="phoneNumber"
          id="phoneNumber"
          error={!!(phoneNumberError && phoneNumberError.length)}
          {...register('phoneNumber')}
          className={styles.custom_input}
          value={inputValue}
          onChange={handleInputChange}
          required
          InputProps={{
            className: styles.custom_input,
            endAdornment: inputValue ? (
              <InputAdornment position="end">
                <CloseIcon
                  onClick={clearInput}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3 ease',
                    position: 'absolute',
                    right: '20px',
                  }}
                />
              </InputAdornment>
            ) : null,
          }}
          sx={{
            width: '360px',
            border: '1px solid #E0E0E0',
            borderRadius: '20px',
            outline: 'none',
            borderColor: 'transparent',
            margin: '1rem 0',
            '& .MuiOutlinedInput-root': {
              height: '50px', // Set the height of the TextField
              '& fieldset': {
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
              },
              '&:hover fieldset': {
                borderColor: '#0072ff', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0072ff', // Border color when focused
              },
            },
            '& .MuiOutlinedInput-input': {
              height: '100%', // Ensure the input field takes up the full height
              padding: '0 14px', // Adjust padding to center the text vertically
              boxSizing: 'border-box', // Ensure padding doesn't affect overall height
            },
            '& .MuiInputLabel-root': {
              top: '10px', // Adjust the label's vertical position
              left: '5px',
              alignItems: 'center', // Align the label text with the input
              justifyContent: 'center', // Align the label text with the input
              display: 'flex', // Align the label text with the input
              fontSize: '1rem', // Adjust the label font size
              lineHeight: '30px', // Ensure the label aligns with the input height
            },
            '& .MuiInputLabel-shrink': {
              top: '1', // Adjust the label position when shrunk
            },
          }}
        />
        <Box
          className={styles.circle_password_input}
          component="div"
          styles={{
            marginBottom: '1rem',
          }}
        >
          <TextField
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            error={hasError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    sx={{
                      color: 'grey.500',
                      width: '30px',
                      height: '30px',
                      objectFit: 'cover',
                      padding: '5px',
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              width: '360px',
              display: 'flex',
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
                  position: 'absolute',
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'text',
                },
              },
            }}
          />
          <Box
            component="div"
            className={styles.circles}
            style={{
              display: 'flex',
            }}
          >
            {[...Array(6)].map((_, index) => (
              <Box
                component="div"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${styles.circle} ${password.length > index ? `${styles.filled}` : ''}`}
              />
            ))}
          </Box>
        </Box>
        {/* <PasswordInput
          name="password"
          id="password"
          othersStyle={{
            marginBottom: '1rem',
          }}
          o
          {...register('password')}
        /> */}
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
      </Box>
    </Container>
  );
}

export default FormLogin;
