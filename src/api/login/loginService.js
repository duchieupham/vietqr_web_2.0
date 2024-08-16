import axiosInstance from '../axios';

const checkExist = (phone) =>
  axiosInstance.get(`accounts/search/${phone}`).then((res) => res.data);

const loginAPI = {
  checkExist,
};

export default loginAPI;
