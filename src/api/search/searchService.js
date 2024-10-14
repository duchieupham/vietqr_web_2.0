/* eslint-disable object-shorthand */
import dayjs from 'dayjs';
import axiosInstance from '~/utils/getAxios';

export const DATE_REGEX = 'YYYY-MM-DD HH:mm:ss';

const searchTransaction = async ({ searchQuery, userId }) => {
  const currentDate = dayjs();
  const numOfPastDays = currentDate.subtract(30, 'day');
  const params = {
    value: searchQuery,
    userId: userId,
    fromDate: numOfPastDays.format(DATE_REGEX),
    toDate: currentDate.format(DATE_REGEX),
    offset: 1,
  };
  const res = await axiosInstance.get('transactions/list/web-v2', {
    useAuth: true,
    params: params,
  });
  return res;
};

export const searchAPI = { searchTransaction };
