import { filters } from './UserLibrary/types';

const playerViewNamesArray = ['layout', 'home', 'playlist', 'search', 'collection', 'user', 'preferences'] as const;
const playerViewPathsArray = ['/player', 'home', 'playlist', 'search', 'collection', 'user/:userId', 'preferences'] as const;

type BasePlayerViewNames = typeof playerViewNamesArray[number];
type BasePlayerViewPaths = typeof playerViewPathsArray[number];

type CollectionNamesTypes = `collection_${typeof filters[number]}`;
type CollectionPathsTypes = `collection/${typeof filters[number]}`;

type AllPlayerViewNames = BasePlayerViewNames | CollectionNamesTypes;
type AllPlayerViewPaths = BasePlayerViewPaths | CollectionPathsTypes;

export type { AllPlayerViewNames, AllPlayerViewPaths, BasePlayerViewNames, BasePlayerViewPaths };
