import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { useAuthContext } from '~/contexts/hooks';
import useImage from '~/hooks/useImage';

const DEFAULT_IMAGE_URL = '/images/logo.png';

export default function Profile({ ...props }) {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imgId);
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {/* Full Name */}
      <Typography
        sx={{ justifyContent: 'center', alignContent: 'center', fontSize: 12 }}
      >
        {session
          ? `${session?.lastName} ${session?.middleName} ${session?.firstName}`
          : 'Guest'}
      </Typography>
      {/* Avatar */}
      <Box
        sx={{
          border: `2px solid ${theme.palette.bright.blue.linear}`,
          borderRadius: '50%',
          width: 40,
          height: 40,
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={session ? imageUrl : DEFAULT_IMAGE_URL}
          alt={
            session
              ? `${session?.lastName} ${session?.middleName} ${session?.firstName}`
              : 'Avatar'
          }
          sx={{
            objectFit: 'contain',
            border: `4px solid ${theme.palette.bright.blue.linear}`,
            borderRadius: '50%',
          }}
          {...props}
        />
      </Box>
    </Box>
  );
}
