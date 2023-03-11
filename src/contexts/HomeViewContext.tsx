import { createContext, useEffect, useReducer } from 'react';
import { getUserAlbums, getUserFollowingArtists, getUserTopItems } from 'services';
import { HomeViewPossibleTypes, HomeViewTypes } from './types/HomeViewContext';
import { FetchStateType } from './types/UserContext';

type HomeViewContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

export type ItemType = {
  data: HomeViewPossibleTypes,
  type: HomeViewTypes,
}

export type State = {
  items: ItemType[];
  fetchState: FetchStateType;
};

type Action = {
  type: 'SET_ITEM' | 'SET_LOADING' | 'SET_ERROR';
  payload: any;
};

const initialState: State = {
  items: [],
  fetchState: {
    loading: false,
    error: false,
  },
};


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return {
        ...state,
        items: action.payload
      }
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
    const { abortController: ACUserArtistsTopItems, requestPromise: userArtistsTopItemPromise } = getUserTopItems('artists');
    const { abortController: ACUserTracksTopItems, requestPromise: userTracksTopItemPromise } = getUserTopItems('tracks');
    const { abortController: ACUserFollowingArtists, requestPromise: userFollowingArtistsPromise } = getUserFollowingArtists();

    dispatch({ type: 'SET_LOADING', payload: true });
    Promise.allSettled([userAlbumPromise, userArtistsTopItemPromise, userTracksTopItemPromise, userFollowingArtistsPromise])
      .then((res) => {
        const [userAlbums, userArtistsTopItems, userTracksTopItems, userFollowingArtists] = res;
        const result = [
          {
            data: userAlbums.status === 'fulfilled' ? userAlbums.value : undefined,
            type: 'user_albums',
          },
          {
            data: userArtistsTopItems.status === 'fulfilled' ? userArtistsTopItems.value : undefined,
            type: 'user_top_items',
          },
          {
            data: userTracksTopItems.status === 'fulfilled' ? userTracksTopItems.value : undefined,
            type: 'user_top_items',
          },
          {
            data: userFollowingArtists.status === 'fulfilled' ? userFollowingArtists.value : undefined,
            type: 'user_followed_artists',
          },
        ];
        dispatch({ type: 'SET_ITEM', payload: result });
      })
      .catch((err) => {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: true });
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: false });
      });

    return () => {
      ACUserAlbum.abort();
      ACUserArtistsTopItems.abort();
      ACUserTracksTopItems.abort();
      ACUserFollowingArtists.abort();
    };
  }, []);

  const values: HomeViewContextType = {
    state,
    dispatch,
  };

  return <HomeViewContext.Provider value={values}>{children}</HomeViewContext.Provider>;
};
