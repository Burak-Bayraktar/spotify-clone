import axiosInstance from 'axiosInstance';
import { AlbumResponse, UserTopItemsResponse } from 'types/WebPlayer/responseTypes';

const getUserAlbums = () => {
  const abortController = new AbortController();

  const requestPromise = axiosInstance
    .get<AlbumResponse>('/current-user-albums', {
      signal: abortController.signal,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      if (!abortController.signal.aborted) {
        throw new Error('Error while fetching user albums');
      }
    });

  return { abortController, requestPromise };
};

const getUserTopItems = (type: 'artists' | 'tracks') => {
  if (!['artists', 'tracks'].includes(type)) throw new Error('Invalid type provided to getUserTopItems');

  const abortController = new AbortController();

  const requestPromise = axiosInstance
    .get<UserTopItemsResponse>(`/user-top/${type}`, {
      signal: abortController.signal,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      if (!abortController.signal.aborted) {
        console.log(e);
        throw new Error(`Error while fetching user top items of type ${type}`);
      }
    });

  return { abortController, requestPromise };
};

export { getUserAlbums, getUserTopItems };
