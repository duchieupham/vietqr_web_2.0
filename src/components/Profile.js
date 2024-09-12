import { Avatar, Typography } from '@mui/material';
import { useAuthContext } from '~/contexts/AuthContext';
import useImage from '~/hooks/useImage';

export default function Profile(props) {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imageId);
  const defaultImageUrl = '/images/logo.png';
  return (
    <>
      {/* Full Name */}
      <Typography>
        {session ? `${session.firstName} ${session.lastName}` : 'Guest'}
      </Typography>
      {/* Avatar */}
      <Avatar
        src={session ? imageUrl : defaultImageUrl}
        alt={session ? `${session.firstName} ${session.lastName}` : 'logo'}
        sx={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        {...props}
      />
    </>
  );
}
