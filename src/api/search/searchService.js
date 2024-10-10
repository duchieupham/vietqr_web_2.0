import axiosInstance from '~/utils/getAxios';

const searchTransaction = async ({ searchQuery, userID }) => {
  const currentDate = new Date();
  const numOfPastDays = currentDate.getDate() - 30; // 30 days ago
  const param = {
    value: searchQuery,
    userId: userID,
    fromDate: numOfPastDays,
    toDate: currentDate,
    offset: 1,
  };
  const res = await axiosInstance.get('apitransactions/list/web-v2', param);
  return res;
};

export const searchAPI = { searchTransaction };
