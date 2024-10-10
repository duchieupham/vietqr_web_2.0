import axiosInstance from '~/utils/getAxios';

const searchTransaction = async (searchQuery, userID) => {
  const currentDate = new Date();
  const daysAgo = currentDate.getDate() - 30; // 30 days ago
  const query = {
    value: searchQuery,
    userId: userID,
    fromDate: daysAgo,
    toDate: currentDate,
  };
  const res = await axiosInstance.get(`apitransactions/list/web-v2/${query}`);
  return res;
};

export const searchAPI = { searchTransaction };
