import axiosInstance from 'axiosInstance';
import { ISpotifyImage } from 'contexts/interfaces/UserContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type TFollowers = {
  href: string;
  total: number;
};

type TPlaylistItem = {
  description: string;
  href: string;
  id: string;
  images: ISpotifyImage[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    followers: TFollowers;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: boolean;
  public: boolean;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

type TUserPlaylist = {
  href: string;
  items: TPlaylistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

const UserPlaylists = () => {
  const [userPlaylists, setUserPlaylists] = useState<TUserPlaylist>();

  useEffect(() => {
    axiosInstance.get<TUserPlaylist>('/current-user-playlists').then((res) => {
      const { data } = res;
      setUserPlaylists({ ...data });
    });
  }, []);

  return (
    <div className="user-playlists-container">
      <ul className="user-playlists">
        {userPlaylists?.items.map((item) => {
          return (
            <li key={item.id} className="user-playlists__item">
              <div className="user-playlists__name">
                <Link to={`playlist/${item.id}`}>{item.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPlaylists;
