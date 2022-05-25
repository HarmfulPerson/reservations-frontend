import axios from 'axios';

import endpoints from '../consts/endpoints';
import { apiBase } from '../consts/config';
import Auth from '../auth/Auth';
import UserSessionDataHandler from '../auth/UserSessionDataHandler';

const UNAUTHORIZED = 401;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
      try {
        const auth = new Auth();
        auth.unauthenticate();
      } catch (error) {
        return { status: 401 };
      }

      return { status: 401 };
    }
    return Promise.reject(error);
  }
);

export const apiGetRequest = async (endpoint, paramsObj = {}) => {
  try {
    return await axios.get(`${apiBase}/${endpoints[endpoint]}`, {
      params: paramsObj,
    });
  } catch (error) {
    return error.response;
  }
};

export const authGetRequest = async (endpoint, paramsObj = {}) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac aby wyswietlic dane';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: paramsObj,
  };
  try {
    return await axios.get(`${apiBase}/${endpoints[endpoint]}`, config);
  } catch (error) {
    return error.response;
  }
};

export const authGetRequestWithToken = async (
  endpoint,
  token,
  paramsObj = {}
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: paramsObj,
  };
  try {
    return await axios.get(`${apiBase}/${endpoints[endpoint]}`, config);
  } catch (error) {
    return error.response;
  }
};

export const authGetRequestWithParam = async (endpoint, param = '') => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(
      `${apiBase}/${endpoints[endpoint]}/${param}`,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const multipleRequest = async (requests) => {
  const responses = await axios.all(requests);
  return responses;
};

export const postRequest = async (endpoint, paramsObj = {}) => {
  try {
    return await axios.post(`${apiBase}/${endpoints[endpoint]}`, paramsObj);
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const patchRequest = async (endpoint, paramsObj = {}) => {
  try {
    return await axios.patch(`${apiBase}/${endpoints[endpoint]}`, paramsObj);
  } catch (error) {
    return error.response;
  }
};

export const authPostRequest = async (endpoint, paramsObj = {}) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(
      `${apiBase}/${endpoints[endpoint]}`,
      paramsObj,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const authPostRequestWithToken = async (
  endpoint,
  token,
  paramsObj = {}
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(
      `${apiBase}/${endpoints[endpoint]}`,
      paramsObj,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const authPutRequest = async (endpoint, paramsObj = {}) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.put(
      `${apiBase}/${endpoints[endpoint]}`,
      paramsObj,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const authPatchRequest = async (endpoint, paramsObj = {}) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.patch(
      `${apiBase}/${endpoints[endpoint]}`,
      paramsObj,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const authPatchRequestWithParam = async (
  endpoint,
  param = '',
  dataObj = {}
) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.patch(
      `${apiBase}/${endpoints[endpoint]}/${param}`,
      dataObj,
      config
    );
  } catch (error) {
    return error.response;
  }
};

export const authGetRequestWithParams = async (endpoint, paramsObj = {}) => {
  const token = UserSessionDataHandler.getToken();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: paramsObj,
  };
  try {
    return await axios.get(`${apiBase}/${endpoints[endpoint]}`, config);
  } catch (error) {
    return error.response;
  }
};

export const authGetFileRequestWithParams = async (
  endpoint,
  paramsObj = {}
) => {
  const token = UserSessionDataHandler.getToken();
  const config = {
    responseType: 'blob',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: paramsObj,
  };
  try {
    return await axios.get(`${apiBase}/${endpoints[endpoint]}`, config);
  } catch (error) {
    return error.response;
  }
};

export const authDelRequestWithParam = async (
  endpoint,
  param = '',
  dataObj = {}
) => {
  const token = UserSessionDataHandler.getToken();
  if (!token || token === '') {
    const error = new Error();
    error.status = 401;
    error.message = 'Musisz sie zalogowac';
    return error;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.delete(
      `${apiBase}/${endpoints[endpoint]}/${param}`,
      config,
      dataObj
    );
  } catch (error) {
    return error.response;
  }
};
