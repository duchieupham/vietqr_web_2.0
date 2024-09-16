import { Avatar, Box, Typography } from '@mui/material';
import { useAuthContext } from '~/contexts/hooks';
import useImage from '~/hooks/useImage';
import theme from '~/theme';

const DEFAULT_IMAGE_URL = '/images/logo.png';

export default function Profile({ ...props }) {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imgId);
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {/* Full Name */}
      <Typography
        sx={{ justifyContent: 'center', alignContent: 'center', fontSize: 12 }}
      >
        {session
          ? `${session.lastName} ${session.middleName} ${session.firstName}`
          : 'Guest'}
      </Typography>
      {/* Avatar */}
      <Box
        sx={{
          backgroundImage: theme.palette.bright.blue.linear,
          borderRadius: '50%',
          p: 0.2,
        }}
      >
        <Avatar
          src={session ? imageUrl : DEFAULT_IMAGE_URL}
          alt={
            session
              ? `${session.lastName} ${session.middleName} ${session.firstName}`
              : 'Avatar'
          }
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          {...props}
        />
      </Box>
    </Box>
  );
}
