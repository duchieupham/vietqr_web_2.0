import React, { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from '~styles/Input.module.scss';
import { Box } from '@mui/material';
import * as yup from 'yup';

function InputPassword(props) {
  // eslint-disable-next-line object-curly-newline
  const { othersStyle, othersProp, t, register, label, watch } = props;

  const passwordSchema = useMemo(
    () =>
      yup
        .string()
        .trim()
        .max(6, 'Mật khẩu không được nhiều hơn 6 ký tự')
        .min(6, 'Mật khẩu không được ít hơn 6 ký tự')
        .matches(/^\d{6}$/, t('passwordRegex'))
        .required(t('passwordRequired')),
    [],
  );
  const [passwordInput, setPasswordInput] = useState(watch('password') || '');
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: '',
  });
  const handlePasswordChange = async (e) => {
    const { value } = e.target;
    setPasswordInput(value);

    try {
      // Validate the password format using Yup schema
      await passwordSchema.validate(value);
      setPasswordError({ status: false, message: '' });
    } catch (error) {
      setPasswordError({ status: true, message: error.message });
    }

    console.log(value);
    if (passwordError.status) {
      console.log(passwordError.message);
    }
  };

  const defaultStyle = {
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
    ...othersStyle,
  };

  return (
    <Box
      className={styles.circle_password_input}
      component="div"
      sx={{
        marginBottom: '1rem',
      }}
    >
      <TextField
        // label={t(label)}
        required
        name={label}
        id={label}
        type="password"
        variant="outlined"
        {...register('password')}
        value={passwordInput}
        onChange={handlePasswordChange}
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
        sx={defaultStyle}
        {...othersProp}
      />
      <Box
        component="div"
        className={styles.circles}
        sx={{
          display: 'flex',
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Box
            component="div"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`${styles.circle} ${passwordInput.length > index ? `${styles.filled}` : ''}`}
          />
        ))}
      </Box>
      {passwordError.status && (
        <Box
          component="p"
          className={styles.error_message}
          sx={{
            marginTop: '3.5rem',
          }}
        >
          {passwordError.message}
        </Box>
      )}
    </Box>
  );
}

export default InputPassword;
