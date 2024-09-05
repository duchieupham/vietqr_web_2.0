import { cookies } from 'next/headers';
import { DEFAULT_LANG, LOCALE_COOKIE } from '~/constants';

// only work with server component

export async function getLocale() {
  return cookies().get(LOCALE_COOKIE)?.value || DEFAULT_LANG;
}

export async function setLocale(locale) {
  cookies().set(LOCALE_COOKIE, locale);
}
