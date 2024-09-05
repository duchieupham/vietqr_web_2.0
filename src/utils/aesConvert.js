import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

// AES encryption and decryption key
const keyAES = CryptoJS.enc.Utf8.parse('keyencryptdevietqrloginqrbyaes01');

// Encrypt a value
export const encrypt = (value) => {
  const iv = CryptoJS.lib.WordArray.random(16);
  const encrypted = CryptoJS.AES.encrypt(value, keyAES, {
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  // console.log('Encrypted:', encrypted.toString());
  return encrypted.toString();
};

// Decrypt a value
export const decrypt = (value) => {
  const bytes = CryptoJS.AES.decrypt(value, keyAES, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  // console.log('Decrypted:', decrypted);
  return decrypted;
};

// Generate an encrypted string
export const getEncryptedString = (loginID, randomKey) => {
  const accessKey = 'VIETQRVNBNSAccessKeyForLoginWEB';
  return `LOGIN${randomKey}${accessKey}${loginID}`;
};

// Generate a new login ID (UUID)
export const getLoginID = () => uuidv4();

// Generate a new random key (UUID)
export const getRandomKey = () => uuidv4();

export const generateQrValue = () => {
  const loginID = getLoginID();
  const randomKey = getRandomKey();
  const encryptedString = getEncryptedString(loginID, randomKey);
  const qrValue = encrypt(encryptedString);

  return {
    loginID,
    randomKey,
    encryptedString,
    qrValue,
  };
};
