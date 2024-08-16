/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from '~styles/Input.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import loginAPI from '~/api/login/loginService';

function LoginInput(props) {
  const { label, t, otherStyles, register, othersProp } = props;

  const [phoneNumberError, setPhoneNumberError] = useState({
    status: false,
    message: '',
  });
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

  const defaultStyle = {
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
    ...otherStyles,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.opacity = 0.8;
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        label={t(label)}
        name={label}
        id={label}
        error={!!(phoneNumberError && phoneNumberError.length)}
        {...register(label)}
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
                  transition: 'all 0.3s ease-in-out',
                  position: 'absolute',
                  right: '20px',
                  opacity: 0.8,
                }}
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
              />
            </InputAdornment>
          ) : null,
        }}
        sx={defaultStyle}
        {...othersProp}
      />
    </Box>
  );
}
export default LoginInput;
