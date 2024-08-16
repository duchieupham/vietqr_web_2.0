import React, { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from '~styles/Input.module.scss';
import { Box } from '@mui/material';

function PasswordInput(props) {
  // eslint-disable-next-line object-curly-newline
  const { othersStyle, othersProp, t, register, label, watch } = props;

  const [inputPassword, setInputPassword] = useState(watch('password') || '');
  const handlePasswordChange = (e) => setInputPassword(e.target.value);

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
        label={t(label)}
        required
        name={label}
        id={label}
        type="password"
        variant="outlined"
        {...register('password')}
        value={inputPassword}
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
            className={`${styles.circle} ${inputPassword.length > index ? `${styles.filled}` : ''}`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default PasswordInput;
