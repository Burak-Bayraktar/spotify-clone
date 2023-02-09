import { UserLibraryFilters } from 'types/WebPlayer/UserLibrary/types';
import AlbumCollection from 'components/WebPlayer/Collections/CollectionItems/albums';
import ArtistCollection from 'components/WebPlayer/Collections/CollectionItems/artists';
import PlaylistCollection from 'components/WebPlayer/Collections/CollectionItems/playlists';
import PodcastCollection from 'components/WebPlayer/Collections/CollectionItems/podcasts';

type CollectionItemProps = {
  type: keyof UserLibraryFilters;
};

type CollectionComponentProps = Pick<CollectionItemProps, 'type'>;

const CollectionFactory = ({ type }: CollectionComponentProps) => {
  const collections: UserLibraryFilters = {
    playlists: {
      type: 'playlists',
      component: PlaylistCollection,
      href: '/player/collection/playlists',
    },
    podcasts: {
      type: 'podcasts',
      component: PodcastCollection,
      href: '/player/collection/podcasts',
    },
    albums: {
      type: 'albums',
      component: AlbumCollection,
      href: '/player/collection/albums',
    },
    artists: {
      type: 'artists',
      component: ArtistCollection,
      href: '/player/collection/artists',
    },
  };

  const activeComponent = type && type === collections[type]?.type && collections[type];
  return <div>{activeComponent ? <activeComponent.component /> : ''}</div>;
};

export default CollectionFactory;
