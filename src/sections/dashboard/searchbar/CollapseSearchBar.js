import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';

export default function CollapseSearchBar({ onClick, ...props }) {
  const { session } = useAuthContext();
  const t = useTranslations();

  return (
    <Button
      sx={{
        borderRadius: '8px',
        display: 'flex',
        background: '#F0F4FA',
        cursor: 'pointer',
        width: 250,
        height: 40,
        justifyContent: 'flex-start',
        gap: 1,
        transition: 'transform 0.4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
        },
      }}
      disableRipple
      onClick={onClick}
      {...props}
    >
      {/* Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src="/icons/search-icon-solid.svg"
          width={30}
          height={30}
          alt="search-icon"
        />
      </Box>
      {/* TextField  */}
      <Box
        sx={{
          '& .MuiTypography-root': {
            justifyContent: 'center',
            alignItems: 'center',
            color: '#666A72',
            fontStyle: 'italic',
            fontSize: {
              xs: '8px',
              sm: '12px',
            },
          },
        }}
      >
        <Typography>
          {`${t('Hello')} ${session?.firstName}, ${t('search')}`}
        </Typography>
      </Box>
    </Button>
  );
}
