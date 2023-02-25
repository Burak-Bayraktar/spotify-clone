import { ISpotifyImage } from 'contexts/interfaces/UserContext';

type Artist = {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
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

export type { Artist, Track, Album };
