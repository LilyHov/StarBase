import axios from 'axios';

class HttpClient {
  static instance = null;

  static baseURL = null;

  static getInstance = (url: string, token: string) => {
    if (HttpClient.instance === null || HttpClient.baseURL !== url) {
      HttpClient.instance = axios.create({
        baseURL: url,
        timeout: 35000,
      });
      HttpClient.instance.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error),
      );
    }

    if (token) {
      HttpClient.instance.defaults.headers.common.apiToken = token;
    }

    return HttpClient.instance;
  };
}

export default HttpClient;
