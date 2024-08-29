export const getOS = (userAgent) => {
  if (userAgent.match(/Android/i)) return 'Android';
  if (userAgent.match(/iPhone|iPad|iPod/i)) return 'iOS';
  if (userAgent.match(/Macintosh/i)) return 'Macintosh';
  if (userAgent.match(/Windows NT/i)) return 'Windows NT';
  return 'unknown';
};
