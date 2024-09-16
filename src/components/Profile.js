import { Avatar, Box, Typography } from '@mui/material';
import { useAuthContext } from '~/contexts/hooks';
import useImage from '~/hooks/useImage';

const DEFAULT_IMAGE_URL = '/images/logo.png';
export default function Profile(props) {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imgId);
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {/* Full Name */}
      <Typography
        sx={{ justifyContent: 'center', alignContent: 'center', fontSize: 12 }}
      >
        {session
          ? `${session.firstName} ${session.middleName} ${session.lastName}`
          : 'Guest'}
      </Typography>
      {/* Avatar */}
      <Avatar
        src={session ? imageUrl : DEFAULT_IMAGE_URL}
        alt={
          session
            ? `${session.firstName} ${session.middleName} ${session.lastName}`
            : 'Avatar'
        }
        sx={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        {...props}
      />
    </Box>
  );
}
