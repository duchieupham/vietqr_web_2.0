import axiosInstance from '../axios';

const checkExist = async (phone) => {
  const res = await axiosInstance.get(`accounts/search/${phone}`);
  console.log(res);
  return res;
};

const login = (phone, password) =>
  axiosInstance.post('accounts', { phone, password }).then((res) => res);

const loginAPI = {
  checkExist,
  login,
};

export default loginAPI;
