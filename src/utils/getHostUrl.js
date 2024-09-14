export const getHostUrl = () => {
  const { protocol, host } = window.location;
  return `${protocol}//${host}`;
};
