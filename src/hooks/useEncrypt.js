import hmac from 'js-crypto-hmac';

const useEncrypt = async (prefix, dataEncrypt) => {
  const key = new TextEncoder().encode(prefix);
  const dataEncoded = new TextEncoder().encode(dataEncrypt);

  const digest = await hmac.compute(key, dataEncoded, 'SHA-256');
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

export default useEncrypt;
