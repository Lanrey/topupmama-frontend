import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// request interceptor
instance.interceptors.request.use(
  (config, reqAuth) => {
    return config;
  },
  (error) => { }
);

const get = async (url) => {
  try {
    let response = await instance.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
};

const post = async (url, payload) => {
  try {
    let response = instance.post(url, payload);
    return response;
  } catch (error) {
    throw error;
  }
};


const put = async (url, payload = {}) => {
  try {
    let response = await instance.put(url, payload);
    return response;
  } catch (error) {
    return error.response;
  }
};

const handleError = async (error) => {
  let message;
  if (typeof error.response.data.message == "string") {
    message = error.response.data.message;
  } else {
    message = error.response.data.message.join(",");
  }
  return message;
};
export { get, post, put, handleError };
