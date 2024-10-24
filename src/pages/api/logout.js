import { deleteCookie } from 'cookies-next';
import { AUTH_COOKIE } from '~/constants';

export default function handler(req, res) {
  try {
    deleteCookie(AUTH_COOKIE, { req, res });
    res.status(200).json({ status: 'success' });
  } catch (e) {
    res.status(400).json({ status: 'error', message: e.toString() });
  }
}
