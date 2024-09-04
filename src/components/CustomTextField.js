import { TextField } from '@mui/material';

export default function CustomTextField({
  field,
  label,
  error,
  helperText,
  inputRef,
  onInput,
  InputProps,
  inputStyle,
  ...props
}) {
  return (
    <TextField
      {...field}
      label={label}
      variant="outlined"
      error={error}
      helperText={helperText}
      inputRef={inputRef}
      onInput={onInput}
      InputProps={InputProps}
      sx={inputStyle}
      {...props}
    />
  );
}
