import { Link, useParams } from 'react-router-dom';
import './style.scss';

const PlaylistFilters = () => {
  const { collectionType } = useParams<{ collectionType: string }>();

  const routes: Array<{ href: string; text: string; type: string }> = [
    {
      href: '/player/collection/playlists',
      text: 'Playlist',
      type: 'playlists',
    },
    {
      href: '/player/collection/podcasts',
      text: 'Podcasts',
      type: 'podcasts',
    },
    {
      href: '/player/collection/artists',
      text: 'Artists',
      type: 'artists',
    },
    {
      href: '/player/collection/albums',
      text: 'Albums',
      type: 'albums',
    },
  ];

  return (
    <div className="playlist-filters">
      {routes.map((route) => {
        return (
          <span key={route.type} className={`playlist-filters-item ${route.type === collectionType ? '--active' : ''}`}>
            <Link to={route.href}>{route.text}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default PlaylistFilters;
