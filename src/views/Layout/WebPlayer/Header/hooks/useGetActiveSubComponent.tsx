import { lazy, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PlayerViewNames, PlayerViewPaths } from 'views/routes';

const useGetActiveSubComponent = () => {
  const { pathname } = useLocation();
  const SearchBar = useMemo(() => lazy(() => import('components/WebPlayer/Header/sub-components/SearchBar/index')), []);
  const PlaylistFilters = useMemo(
    () => lazy(() => import('components/WebPlayer/Header/sub-components/PlaylistFilters/index')),
    []
  );

  const headerSubComponents: Partial<
    Record<PlayerViewNames, { path: PlayerViewPaths; element: React.LazyExoticComponent<() => JSX.Element> }>
  > = {
    search: { path: 'search', element: SearchBar },
    playlist: { path: 'collection', element: PlaylistFilters },
  };

  const activeSubHeaderComponent = useMemo(() => {
    const base: PlayerViewPaths = '/player';

    const headerSubcomponent:
      | { path: PlayerViewPaths; element: React.LazyExoticComponent<() => JSX.Element> }
      | undefined = Object.values(headerSubComponents).find((item) => {
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
