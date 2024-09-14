import { deleteCookie } from 'cookies-next';
import { AUTH_COOKIE } from '~/constants';

export default function handler(req, res) {
  deleteCookie(AUTH_COOKIE, { req, res });

  res.status(200).json({ message: 'success' });
}
