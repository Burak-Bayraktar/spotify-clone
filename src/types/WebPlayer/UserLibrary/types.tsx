const filters = ['playlists', 'podcasts', 'albums', 'artists'] as const;

type RequiredFilters = typeof filters[number];

type UserLibraryFilters = {
  [key in RequiredFilters]: {
    type: key;
    component: () => JSX.Element;
    href: `/player/collection/${key}`;
    text?: string;
  };
};

export type { RequiredFilters, UserLibraryFilters };
export { filters };
