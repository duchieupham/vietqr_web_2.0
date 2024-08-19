import axios from 'axios';
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
  if (axiosConfig?.usePageLoading && options?.loading?.setLoading) {
    options?.loading.setLoading(true);
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
};

const handleAxiosResponse = (response, options) => {
  // if (response.config?.apiNotification) withToastMessage(response);

  if (response.config?.usePageLoading && options?.loading?.setLoading) {
    // options?.loading.setLoading(false);
  }

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
  baseURL: process.env.NEXT_PUBLIC_DEV_URL,
  paramsSerializer: parseParams,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, Content-Type, X-Requested-With, Accept',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'no-cache',
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
