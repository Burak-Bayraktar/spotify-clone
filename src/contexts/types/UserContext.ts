import { ISpotifyImage } from './../interfaces/UserContext';

export type UserContextType = {
    country: string,
    display_name: string,
    id: string,
    images: ISpotifyImage[],
    product: string,
    type: string,
    uri: string;
  };
  