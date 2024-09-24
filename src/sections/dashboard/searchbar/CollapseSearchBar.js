import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAuthContext } from '~/contexts/hooks';
import { useAppDispatch } from '~/redux/hook';

export default function CollapseSearchBar({ ...props }) {
  const { session } = useAuthContext();
  const t = useTranslations();
  const dispatch = useAppDispatch();

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
      }}
      disableRipple
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
