import { Avatar } from '@mui/material';
import { useAuthContext } from '~/contexts/AuthContext';
import useImage from '~/hooks/useImage';

export default function MyAvatar() {
  const { session } = useAuthContext();
  const imageUrl = useImage(session?.imageId);
  return <Avatar src={imageUrl}></Avatar>;
}
