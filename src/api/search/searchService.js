/* eslint-disable object-shorthand */
import dayjs from 'dayjs';
import axiosInstance from '~/utils/getAxios';

const searchTransaction = async ({ searchQuery, userID }) => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const numOfPastDays = dayjs()
    .subtract(30, 'day')
    .format('YYYY-MM-DD HH:mm:ss');

  const params = {
    value: searchQuery,
    userId: userID,
    fromDate: numOfPastDays,
    toDate: currentDate,
    offset: 1,
  };
  const res = await axiosInstance.get('transactions/list/web-v2', {
    useAuth: true,
    params: params,
  });
  return res;
};

export const searchAPI = { searchTransaction };
