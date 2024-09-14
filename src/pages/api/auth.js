import { setCookie } from 'cookies-next';
import { AUTH_COOKIE } from '~/constants';

export default function handler(req, res) {
  const { token, exp } = req.body;
  const expire = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 days

  setCookie(AUTH_COOKIE, token, {
    req,
    res,
    secure: true,
    expire: exp || expire,
    sameSite: 'strict',
  });

  res.status(200).json({ message: 'success' });
}
