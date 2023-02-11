import { lazy, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { AllPlayerViewNames, AllPlayerViewPaths } from 'types/WebPlayer/routeTypes';

type RouteInformation = { path: AllPlayerViewPaths; element: React.LazyExoticComponent<() => JSX.Element> };

const useGetActiveSubComponent = () => {
  const { pathname } = useLocation();
  const SearchBar = useMemo(() => lazy(() => import('components/WebPlayer/Header/sub-components/SearchBar/index')), []);
  const PlaylistFilters = useMemo(() => lazy(() => import('components/WebPlayer/Header/sub-components/PlaylistFilters/index')), []);

  const headerSubComponents: Partial<Record<AllPlayerViewNames, RouteInformation>> = {
    search: { path: 'search', element: SearchBar },
    collection_albums: { path: 'collection/albums', element: PlaylistFilters },
    collection_artists: { path: 'collection/artists', element: PlaylistFilters },
    collection_playlists: { path: 'collection/playlists', element: PlaylistFilters },
    collection_podcasts: { path: 'collection/podcasts', element: PlaylistFilters },
  };

  const activeSubHeaderComponent = useMemo(() => {
    const base: AllPlayerViewPaths = '/player';

    const headerSubcomponent: RouteInformation | undefined = Object.values(headerSubComponents).find((item) => {
      return pathname.startsWith(`${base}/${item.path}`);
    });

    if (headerSubcomponent) {
      return headerSubcomponent.element;
    }
  }, [pathname]);

  return {
    activeSubHeaderComponent,
  };
};

export default useGetActiveSubComponent;
