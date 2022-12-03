import axiosInstance from '../axiosInstance';

type AccessToken = {
  'access-token': string;
  'refresh-token': string;
};

export const generateLoginUrl = () => {
  var scopes = [
    'user-read-private',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-follow-read',
    'user-follow-modify',
  ];

  let baseUrl = `https://accounts.spotify.com/authorize?`;
  baseUrl += `&client_id=${import.meta.env.VITE_CLIENT_ID}`;
  baseUrl += `&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}`;
  baseUrl += '&scope=' + encodeURIComponent(scopes.join(' '));
  baseUrl += `&response_type=code`;

  return baseUrl;
};

export const logoutUser = () => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
};

export const getAccessToken = (code: string) => {
  return axiosInstance.get<AccessToken>('/accessToken', { params: { code } }).then((resAT) => {
    return resAT;
  });
};
