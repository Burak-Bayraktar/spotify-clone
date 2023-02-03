import AlbumCollection from './CollectionItems/albums';
import ArtistCollection from './CollectionItems/artists';
import PlaylistCollection from './CollectionItems/playlists';
import PodcastCollection from './CollectionItems/podcasts';

type CollectionItemProps = {
  type: string | undefined;
  component: () => JSX.Element;
};

type CollectionComponentProps = Pick<CollectionItemProps, 'type'>;

const CollectionFactory = ({ type }: CollectionComponentProps) => {
  const collections: Record<string, CollectionItemProps> = {
    playlists: {
      type: 'playlists',
      component: PlaylistCollection,
    },
    podcasts: {
      type: 'podcasts',
      component: PodcastCollection,
    },
    albums: {
      type: 'albums',
      component: AlbumCollection,
    },
    artists: {
      type: 'artists',
      component: ArtistCollection,
    },
  };

  const activeComponent = type && type === collections[type]?.type && collections[type];
  return <div>{activeComponent ? <activeComponent.component /> : ''}</div>;
};

export default CollectionFactory;
