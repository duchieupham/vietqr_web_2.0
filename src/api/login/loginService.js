import useEncrypt from '~/hooks/useEncrypt';
import axiosInstance from '../axios';

const checkExist = async (phone) => {
  const res = await axiosInstance.get(`accounts/search/${phone}`);
  console.log(res);
  return res;
};

const login = async (_phoneNo, pass) => {
  const passwordEncrypt = await useEncrypt(_phoneNo, pass);
  const userAgent = window?.navigator.userAgent;
  const data = {
    phoneNo: _phoneNo,
    email: '',
    password: passwordEncrypt,
    fcmToken: '',
    device: userAgent,
    platform: 'Web',
    sharingCode: '',
  };

  axiosInstance.post('accounts', data).then((res) => res);
};

const loginAPI = {
  checkExist,
  login,
};

export default loginAPI;
