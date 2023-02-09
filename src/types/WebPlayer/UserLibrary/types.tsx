type RequiredFilters = 'playlists' | 'podcasts' | 'albums' | 'artists';

type UserLibraryFilters = {
  [key in RequiredFilters]: {
    type: key;
    component: () => JSX.Element;
    href: `/player/collection/${key}`;
    text?: string;
  };
};

export type { RequiredFilters, UserLibraryFilters };
