import { Box, InputAdornment, TextField } from '@mui/material';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';
import theme from '~/theme';

export default function SearchBar() {
  const { session } = useAuthContext();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder={`Xin chào ${session?.firstName}, bạn cần gì?`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image
                src="/images/search-icon.svg"
                width={30}
                height={30}
                alt="search-icon"
                style={{
                  cursor: 'pointer',
                  margin: '0 0 0 10px',
                  color: theme.palette.aiTextColor,
                }}
              />
            </InputAdornment>
          ),
          sx: {
            borderRadius: 25,
            backgroundColor: 'white',
            padding: 0,
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 25,
            padding: 0,
            zIndex: 1,
            border: '1px solid transparent',
            backgroundImage: `linear-gradient(white, white), ${theme.palette.aiTextColor}`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
          },
          '& .MuiInputBase-root': {
            width: 250,
            height: 40,
          },
          '& .MuiInputBase-input': {
            fontSize: 12,
          },
        }}
      />
    </Box>
  );
}
