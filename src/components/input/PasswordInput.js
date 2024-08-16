import React, { useMemo, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from '~styles/Input.module.scss';
import { Box } from '@mui/material';

// const CirclePasswordInput = styled('div')`
//   display: flex;
//   align-items: center;
//   position: relative;
//   .MuiOutlinedInput-input {
//     position: absolute;
//     opacity: 0; /* Hide the actual input field */
//     left: 0;
//     width: 100%;
//     height: 100%;
//     cursor: text;
//   }

//   .circles {
//     display: flex;
//     gap: 8px;
//     pointer-events: none; /* Prevent clicking on the circles */
//     left: 50px;
//   }

//   .circle {
//     width: 12px;
//     height: 12px;
//     border: 1px solid gray;
//     border-radius: 50%;
//     background-color: transparent;
//   }

//   .circle.filled {
//     border: none;
//     background-color: #0072ff;
//     opacity: 1;
//   }
// `;

function PasswordInput(props) {
  const { othersStyle, othersProp } = props;
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const hasError = useMemo(() => value === 'error', [value]);

  const getHelperText = useMemo(
    () => (value === 'error' ? 'Incorrect entry.' : ''),
    [value],
  );

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      className={styles.circle_password_input}
      component="div"
      style={{
        ...othersStyle,
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
  );
}

export default PasswordInput;
