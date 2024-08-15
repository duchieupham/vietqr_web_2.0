/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '~styles/Input.module.scss';

function LoginInput(props) {
  const { label, t, type = 'text', otherStyles } = props;

  const defaultStyles = {
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
      top: '-5px', // Adjust the label's vertical position
      left: '5px',
      alignItems: 'center', // Align the label text with the input
      justifyContent: 'center', // Align the label text with the input
      display: 'flex', // Align the label text with the input
      fontSize: '0.9rem', // Adjust the label font size
      lineHeight: '30px', // Ensure the label aligns with the input height
    },
    '& .MuiInputLabel-shrink': {
      top: '1', // Adjust the label position when shrunk
    },
    ...otherStyles,
  };

  const adornment =
    label === 'phoneNumber' ? (
      <InputAdornment>
        <CloseIcon />
      </InputAdornment>
    ) : null;

  return (
    <TextField
      label={t(label)}
      variant="outlined"
      required
      className={styles.text_field}
      InputProps={{
        className: styles.text_field,
        endAdornment: adornment,
      }}
      sx={defaultStyles}
      type={type}
      autoComplete={type === 'password' ? 'current-password' : undefined}
    />
  );
}
export default LoginInput;
