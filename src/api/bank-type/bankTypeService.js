const { default: axiosInstance } = require('../axios');

const bankTypeList = async () => {
  const res = await axiosInstance.get('bank-type/unauthenticated');
  return res;
};

const bankTypeAPI = {
  bankTypeList,
};
export default bankTypeAPI;
