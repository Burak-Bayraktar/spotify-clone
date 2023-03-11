import { ISpotifyImage } from 'contexts/interfaces/UserContext';

type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

type Track = {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  } | null;
  restrictions: { reason: string } | null;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

type Album = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: { reason: string } | null;
  type: string;
  uri: string;
  copyrights: { text: string; type: string }[];
  external_ids: { isrc: string; ean: string; upc: string };
  genres: string[];
  label: string;
  popularity: number;
  artists: Artist[];
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Track[];
  };
};

type Playlist = {
  collaborative: boolean;
  description: string | null;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: boolean | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export type { Artist, Track, Album, Playlist };
