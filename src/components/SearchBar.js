import { Box, InputAdornment, TextField } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';

export default function SearchBar() {
  const { session } = useAuthContext();
  const t = useTranslations();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder={`${t('Hello')} ${session?.firstName}, ${t('search')}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image
                src="/icons/search-icon-solid.svg"
                width={30}
                height={30}
                alt="search-icon"
                style={{
                  cursor: 'pointer',
                  margin: '0 0 0 10px',
                }}
              />
            </InputAdornment>
          ),
          sx: {
            backgroundColor: 'white',
            padding: 0,
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: 0,
            zIndex: 1,
            border: '1px solid transparent',
            backgroundColor: '#F0F4FA',
          },
          '& .MuiInputBase-root': {
            width: 250,
            height: 40,
            borderRadius: '8px',
          },
          '& .MuiInputBase-input': {
            fontSize: 12,
            padding: 0,
            marginLeft: '-4px',
            ':focus': {
              background: 'transparent',
            },
          },
        }}
      />
    </Box>
  );
}
