import { setCookie } from 'cookies-next';
import { AUTH_COOKIE } from '~/constants';

export default function handler(req, res) {
  try {
    const { token, exp } = req.body;
    const expire = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 days

    setCookie(AUTH_COOKIE, token, {
      req,
      res,
      secure: true,
      expire: exp || expire,
      sameSite: 'strict',
    });

    res.status(200).json({ status: 'success' });
  } catch (e) {
    res.status(400).json({ status: 'error', message: e.toString() });
  }
}
