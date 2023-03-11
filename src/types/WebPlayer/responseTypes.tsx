import { ISpotifyImage } from 'contexts/interfaces/UserContext';
import { Album, Artist, Playlist } from './contentTypes';

type AlbumResponse = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: {
    added_at: string;
    album: Album;
  }[];
};

type UserFollowingArtistsResponse = {
  artists: {
    href: string;
    limit: number;
    next: string | null;
    cursors: {
      after: string | null;
      before: string | null;
    };
    total: number;
    items: Artist[];
  };
};

type FeaturedPlaylistsResponse = {
  message: string;
  playlists: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Playlist[];
  };
};

type PlaylistResponse = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Array<Playlist>;
};

type UserSavedTrackResponse = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Array<{
    added_at: string;
    track: {
      album: Album;
      artists: Artist[];
      available_markets: string[];
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_playable: boolean;
      linked_from: any;
      restrictions: {
        reason: string;
      } | null;
      name: string;
      popularity: number;
      preview_url: string | null;
      track_number: number;
      type: "track";
      uri: string;
      is_local: boolean;
    };
  }>;
};

type UserTopItemsResponse = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: ISpotifyImage[];
    name: string;
    popularity: number;
    type: 'artists' | 'tracks';
    uri: string;
  }[];
};

export type { AlbumResponse, UserFollowingArtistsResponse, PlaylistResponse, UserSavedTrackResponse, UserTopItemsResponse };
