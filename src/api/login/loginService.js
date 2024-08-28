import useEncrypt from '~/hooks/useEncrypt';
import axios from 'axios';
import axiosInstance from '../axios';

const userAgent = () => window?.navigator.userAgent;

const checkExist = async (phone) => {
  const res = await axiosInstance.get(`accounts/search/${phone}`);
  return res;
};

const login = async (_phoneNo, pass) => {
  const passwordEncrypt = await useEncrypt(_phoneNo, pass);

  const data = {
    phoneNo: _phoneNo,
    email: '',
    password: passwordEncrypt,
    fcmToken: '',
    device: userAgent,
    platform: 'WEB',
    sharingCode: '',
  };
  const res = await axiosInstance.post('accounts', data);
  return res;
};

const loginQR = async (userID) => {
  const data = {
    userId: userID,
    method: 'USER_ID',
    cardNumber: '',
    fcmToken: '',
    platform: 'WEB',
    device: userAgent,
  };
  // console.log(data);
  const res = await axios.post(
    'https://api.vietqr.org/vqr/api/accounts/login',
    data,
  );
  return res;
};

const loginAPI = {
  checkExist,
  login,
  loginQR,
};

export default loginAPI;
