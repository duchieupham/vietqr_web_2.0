const { default: axiosInstance } = require('../axios');

const bankTypeList = async () => {
  await axiosInstance.get('bank-type').then((res) => res);
};

const bankTypeAPI = {
  bankTypeList,
};

export default bankTypeAPI;
