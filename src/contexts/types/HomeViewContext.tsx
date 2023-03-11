import {
  AlbumResponse,
  PlaylistResponse,
  UserFollowingArtistsResponse,
  UserSavedTrackResponse,
  UserTopItemsResponse,
} from 'types/WebPlayer/responseTypes';

export type HomeViewPossibleTypes = AlbumResponse | UserFollowingArtistsResponse | UserTopItemsResponse | UserSavedTrackResponse | PlaylistResponse;
export type HomeViewTypes = 'user_albums' | 'user_followed_artists' | 'user_top_items' | 'user_saved_tracks' | 'user_playlists';

export type HomeViewTypeMap = {
  user_albums: AlbumResponse;
  user_followed_artists: UserFollowingArtistsResponse;
  user_top_items: UserTopItemsResponse;
  user_saved_tracks: UserSavedTrackResponse;
  user_playlists: PlaylistResponse;
};
