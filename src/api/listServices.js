import axiosInstance from './axios';

const getList = () => axiosInstance.get('posts').then((res) => res.data);

const listApi = {
  getList,
};

export default listApi;
