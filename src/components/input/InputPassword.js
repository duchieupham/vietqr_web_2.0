/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from '~styles/Input.module.scss';
import { Box } from '@mui/material';
import { LoginFormSchema } from '~/utils/definitions';

function InputPassword({
  othersStyle,
  othersProp,
  register,
  label,
  watch,
  errors,
}) {
  const [passwordInput, setPasswordInput] = useState(watch('password') || '');

  useEffect(() => {
    setPasswordInput(watch('password') || '');
  }, [watch]);

  const handlePasswordChange = async (e) => {
    const { value } = e.target;

    if (value.length > 6) {
      return;
    }

    setPasswordInput(value);

    try {
      await LoginFormSchema.validateAt('password', { password: value });
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation error if needed
      }
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
                  color: 'grey',
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
            key={[_]}
            className={`${styles.circle} ${passwordInput.length > index ? `${styles.filled}` : ''}`}
          />
        ))}
      </Box>
      {errors && errors.password && (
        <Box
          component="p"
          className={styles.error_message}
          sx={{
            marginTop: '4rem',
          }}
        >
          {errors.password.message}
        </Box>
      )}
    </Box>
  );
}

export default InputPassword;
