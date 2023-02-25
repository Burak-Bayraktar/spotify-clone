import { createContext, useEffect, useReducer, useRef } from 'react';
import { getUserAlbums, getUserTopItems } from 'services';
import { AlbumResponse, UserTopItemsResponse } from 'types/WebPlayer/responseTypes';
import { FetchStateType } from './types/UserContext';

type State = {
  albums: AlbumResponse;
  artists: [];
  playlists: [];
  tracks: [];
  topItems: UserTopItemsResponse;
  fetchState: FetchStateType;
};

type Action = {
  type: 'SET_ALBUMS' | 'SET_ARTISTS' | 'SET_TOP_ITEMS' | 'SET_PLAYLISTS' | 'SET_TRACKS' | 'SET_LOADING' | 'SET_ERROR';
  payload: any;
};

const initialState: State = {
  albums: undefined as any as AlbumResponse,
  artists: [],
  playlists: [],
  tracks: [],
  topItems: [] as any as UserTopItemsResponse,
  fetchState: {
    loading: false,
    error: false,
  },
};

type HomeViewContextType = {
  state: State;
  dispatch: (action: Action) => void;
  getAlbums: () => AlbumResponse;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ALBUMS':
      return {
        ...state,
        albums: action.payload as AlbumResponse,
      };
    case 'SET_ARTISTS':
      return {
        ...state,
        artists: action.payload,
      };
    case 'SET_TOP_ITEMS':
      return {
        ...state,
        topItems: action.payload as UserTopItemsResponse,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload,
      };
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        fetchState: {
          loading: action.payload,
          error: state.fetchState.error,
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        fetchState: {
          loading: state.fetchState.loading,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const HomeViewContext = createContext<HomeViewContextType | undefined>(undefined);
export const HomeViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { abortController: ACUserAlbum, requestPromise: userAlbumPromise } = getUserAlbums();
    const { abortController: ACUserTopItems, requestPromise: userTopItemPromise } = getUserTopItems('artists');

    dispatch({ type: 'SET_LOADING', payload: true });
    Promise.allSettled([userAlbumPromise, userTopItemPromise])
      .then((res) => {
        const [albums, topItems] = res;
        if (albums.status === 'fulfilled') dispatch({ type: 'SET_ALBUMS', payload: albums.value });
        if (topItems.status === 'fulfilled') dispatch({ type: 'SET_TOP_ITEMS', payload: topItems.value });
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: true });
      })
      .finally(() => {
        console.log('finally');
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: false });
      });

    return () => {
      ACUserAlbum.abort();
      ACUserTopItems.abort();
    };
  }, []);

  const values: HomeViewContextType = {
    state,
    dispatch,
    getAlbums: () => state.albums,
  };

  return <HomeViewContext.Provider value={values}>{children}</HomeViewContext.Provider>;
};
