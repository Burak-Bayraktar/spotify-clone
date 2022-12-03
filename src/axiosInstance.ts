import axios from 'axios';

type RefreshToken = {
  'access-token': string;
};

const headers = {
  Authorization: `Bearer ${localStorage.getItem('access-token')}`,
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        const refresh_token = localStorage.getItem('refresh-token');
        axiosInstance
          .get<RefreshToken>('/refreshToken', {
            params: { refresh_token },
          })
          .then(async (resAT) => {
            localStorage.setItem('access-token', resAT.data['access-token']);
          });
      }
    }
  }
);

export default axiosInstance;
