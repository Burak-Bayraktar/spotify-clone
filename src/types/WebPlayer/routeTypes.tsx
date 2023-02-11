import { filters } from './UserLibrary/types';

const playerViewNamesArray = ['layout', 'home', 'playlist', 'search', 'collection'] as const;
const playerViewPathsArray = ['/player', 'home', 'playlist', 'search', 'collection'] as const;

type BasePlayerViewNames = typeof playerViewNamesArray[number];
type BasePlayerViewPaths = typeof playerViewPathsArray[number];

type CollectionNamesTypes = `collection_${typeof filters[number]}`;
type CollectionPathsTypes = `collection/${typeof filters[number]}`;

type AllPlayerViewNames = BasePlayerViewNames | CollectionNamesTypes;
type AllPlayerViewPaths = BasePlayerViewPaths | CollectionPathsTypes;

export type { AllPlayerViewNames, AllPlayerViewPaths, BasePlayerViewNames, BasePlayerViewPaths };
