import axiosInstance from 'axiosInstance';
import Scrollable from 'components/shared/Scrollable';
import { ISpotifyImage } from 'contexts/interfaces/UserContext';
import { useState, useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

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

type UserPlaylistProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  componentHeight: number;
};

const UserPlaylists = (props: UserPlaylistProps) => {
  const [userPlaylists, setUserPlaylists] = useState<TUserPlaylist>();

  const playlistRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    axiosInstance.get<TUserPlaylist>('/current-user-playlists').then((res) => {
      if (!res) return;

      const { data } = res;
      setUserPlaylists({ ...data });
    });
  }, []);

  return (
    <Scrollable elementRef={playlistRef.current!} height={props.componentHeight}>
      <div ref={props.containerRef} className="user-playlists-container">
        <ul ref={playlistRef} className="user-playlists">
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
    </Scrollable>
  );
};

export default memo(UserPlaylists);
