import WebPlayerLayout from 'views/Layout/WebPlayer';
import PlayerHomePage from 'views/Content/WebPlayerPages/HomePage';
import PlaylistPage from 'views/Content/WebPlayerPages/PlaylistPage';
import SearchPage from 'views/Content/WebPlayerPages/SearchPage';
import UserLibrary from 'views/Content/WebPlayerPages/UserLibrary';
import UserProfile from 'views/Content/WebPlayerPages/UserProfile';
import Preferences from 'views/Content/WebPlayerPages/Preferences';

import WebSiteLayout from 'views/Layout/WebSite';
import LoginPage from 'views/Auth/Login';
import HomePage from 'views/Content/WebSitePages/HomePage';
import RedirectPage from 'views/Content/WebSitePages/RedirectPage';
import PremiumPage from 'views/Content/WebSitePages/PremiumPage';
import DownloadPage from 'views/Content/WebSitePages/DownloadPage';

import { BasePlayerViewNames, BasePlayerViewPaths } from 'types/WebPlayer/routeTypes';
import { WebsiteViewNames, WebsiteViewPaths } from 'types/WebSite/routeTypes';

type WebsiteRoutes = Record<WebsiteViewNames, { path: WebsiteViewPaths; element: () => JSX.Element }>;
type PlayerRoutes = Record<BasePlayerViewNames, { path: BasePlayerViewPaths; element: () => JSX.Element }>;

const webSiteRoutes: WebsiteRoutes = {
  layout: { path: '/', element: WebSiteLayout },
  home: { path: '/', element: HomePage },
  premium: { path: 'premium', element: PremiumPage },
  download: { path: 'download', element: DownloadPage },
  redirect: { path: 'redirect', element: RedirectPage },
  login: { path: 'login', element: LoginPage },
};

const webPlayerRoutes: PlayerRoutes = {
  layout: { path: '/player', element: WebPlayerLayout },
  home: { path: 'home', element: PlayerHomePage },
  playlist: { path: 'playlist', element: PlaylistPage },
  search: { path: 'search', element: SearchPage },
  collection: { path: 'collection', element: UserLibrary },
  user: { path: 'user/:userId', element: UserProfile },
  preferences: { path: 'preferences', element: Preferences },
};

export { webSiteRoutes, webPlayerRoutes };
export type { WebsiteRoutes, PlayerRoutes as Routes };
