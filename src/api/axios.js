import axios from 'axios';
import { getCookie } from 'cookies-next';
import _toLower from 'lodash-es/toLower';
// ----------------------------------------------------------------------

const withFormData = (config) => {
  if (_toLower(config?.method) !== 'post' || config?.data == null) return;

  if (config.data instanceof FormData) return;

  const { data } = config;
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    let value = data[key];
    if (typeof value === 'object' && !(value instanceof File)) {
      value = JSON.stringify(value);
    }

    formData.append(key, value);
  });
  config.data = formData;
};

const withDefaultParams = (config, defaultParams) => {
  if (_toLower(config?.method) === 'post') {
    // if (config?.data == null) return;
  }
};

const requestPreprocess = (axiosConfig, options) => {
  const session = getCookie('auth_token');

  if (axiosConfig?.useAuth && session) {
    axiosConfig.headers.Authorization = `Bearer ${session}`;
  }

  withDefaultParams(axiosConfig, options?.defaultParams);
  withFormData(axiosConfig);
  return axiosConfig;
};

const handleAxiosError = (error) => {
  console.log(
    `API ${error?.response?.status}`,
    error?.request?.path ?? error?.request?.responseURL,
    error.message,
  );
  return error;
};

const handleAxiosResponse = (response, options) => {
  response.headers.Authorization = null;

  return response;
};

const parseParams = (params) => {
  const keys = Object.keys(params);
  let options = '';

  keys.forEach((key) => {
    const isParamTypeObject = typeof params[key] === 'object';
    const isParamTypeArray =
      isParamTypeObject &&
      Array.isArray(params[key]) &&
      params[key].length >= 0;

    if (!isParamTypeObject) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isParamTypeArray) {
      params[key].forEach((element) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: parseParams,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => requestPreprocess(config),
  handleAxiosError,
);

axiosInstance.interceptors.response.use(
  (config) => handleAxiosResponse(config),
  handleAxiosError,
);
export default axiosInstance;
