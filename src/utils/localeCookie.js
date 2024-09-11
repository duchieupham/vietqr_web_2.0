import { cookies } from 'next/headers';
import { DEFAULT_LANG, LOCALE_COOKIE } from '~/constants';

// only work with server component

export async function getLocale() {
  const localLocale = cookies().get(LOCALE_COOKIE)?.value;
  return localLocale && localLocale !== 'undefined'
    ? localLocale
    : DEFAULT_LANG;
}

export async function setLocale(locale) {
  cookies().set(LOCALE_COOKIE, locale);
}
