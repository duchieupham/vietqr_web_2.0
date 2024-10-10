import axiosInstance from '~/utils/getAxios';

const searchTransaction = async (searchQuery, userID) => {
  const currentDate = new Date();
  const daysAgo = currentDate.getDate() - 30; // 30 days ago
  const res = await axiosInstance.get('apitransactions/list/web-v2', {
    value: searchQuery,
    userId: userID,
    fromDate: daysAgo,
    toDate: currentDate,
  });
  return res;
};

export const searchAPI = { searchTransaction };
