import { ISpotifyImage } from 'contexts/interfaces/UserContext';
import { Album } from './contentTypes';

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

export type { AlbumResponse, UserTopItemsResponse };
