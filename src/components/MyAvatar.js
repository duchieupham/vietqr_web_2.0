import { Avatar } from '@mui/material';
import { useAuthContext } from '~/contexts/AuthContext';
import useImage from '~/hooks/useImage';

export default function MyAvatar({ ...other }) {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imageId);
  const defaultImageUrl = '/images/logo.png';
  return (
    <Avatar
      src={session ? imageUrl : defaultImageUrl}
      alt={session ? `${session.firstName} ${session.lastName}` : 'logo'}
      {...other}
    />
  );
}
