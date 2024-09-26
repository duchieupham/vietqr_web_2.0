import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';

export default function CollapseSearchBar({ onClick, isExpanded, ...props }) {
  const { session } = useAuthContext();
  const t = useTranslations();

  return (
    <Button
      sx={{
        top: '8px',
        position: 'absolute',
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: '8px',
        left: '21rem',
        width: '16rem',
        height: '40px',
        transition: 'left 0.3s ease, width 0.5s ease, height 0.3s ease',
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
        {isExpanded ? (
          <Image
            src="/icons/search-icon-gradient.svg"
            width={30}
            height={30}
            alt="search-icon"
          />
        ) : (
          <Image
            src="/icons/search-icon-solid.svg"
            width={30}
            height={30}
            alt="search-icon"
          />
        )}
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
