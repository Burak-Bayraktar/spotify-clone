import { Link, useParams } from 'react-router-dom';
import './style.scss';
import { UserLibraryFilters } from 'types/WebPlayer/UserLibrary/types';
import AlbumCollection from 'components/WebPlayer/Collections/CollectionItems/albums';
import ArtistCollection from 'components/WebPlayer/Collections/CollectionItems/artists';
import PlaylistCollection from 'components/WebPlayer/Collections/CollectionItems/playlists';
import PodcastCollection from 'components/WebPlayer/Collections/CollectionItems/podcasts';

const PlaylistFilters = () => {
  const { collectionType } = useParams<{ collectionType: string }>();

  const collections: UserLibraryFilters = {
    playlists: {
      text: 'Playlists',
      type: 'playlists',
      component: PlaylistCollection,
      href: '/player/collection/playlists',
    },
    podcasts: {
      text: 'Podcasts',
      type: 'podcasts',
      component: PodcastCollection,
      href: '/player/collection/podcasts',
    },
    albums: {
      text: 'Albums',
      type: 'albums',
      component: AlbumCollection,
      href: '/player/collection/albums',
    },
    artists: {
      text: 'Artists',
      type: 'artists',
      component: ArtistCollection,
      href: '/player/collection/artists',
    },
  };

  return (
    <div className="playlist-filters">
      {Object.entries(collections).map(([key, value]) => {
        return (
          <span key={key} className={`playlist-filters-item ${value.type === collectionType ? '--active' : ''}`}>
            <Link to={value.href}>{value.text}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default PlaylistFilters;
