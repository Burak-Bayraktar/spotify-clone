import WebPlayerLayout from 'views/Layout/WebPlayer';
import PlayerHomePage from 'views/Content/WebPlayerPages/HomePage';
import PlaylistPage from 'views/Content/WebPlayerPages/PlaylistPage';
import SearchPage from 'views/Content/WebPlayerPages/SearchPage';
import UserLibrary from 'views/Content/WebPlayerPages/UserLibrary';

import WebSiteLayout from 'views/Layout/WebSite';
import LoginPage from 'views/Auth/Login';
import HomePage from 'views/Content/WebSitePages/HomePage';
import RedirectPage from 'views/Content/WebSitePages/RedirectPage';
import PremiumPage from 'views/Content/WebSitePages/PremiumPage';
import DownloadPage from 'views/Content/WebSitePages/DownloadPage';

type PlayerViewNames = 'layout' | 'home' | 'playlist' | 'search' | 'collection';
type PlayerViewPaths = '/player' | 'home' | 'playlist' | 'search' | 'collection';
type PlayerRoutes = Record<PlayerViewNames, { path: PlayerViewPaths; element: () => JSX.Element }>;

type WebsiteViewNames = 'layout' | 'home' | 'premium' | 'download' | 'redirect' | 'login';
type WebsiteViewPaths = '/' | 'premium' | 'download' | 'redirect' | 'login';
type WebsiteRoutes = Record<WebsiteViewNames, { path: WebsiteViewPaths; element: () => JSX.Element }>;

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
};

export { webSiteRoutes, webPlayerRoutes };
export type {
  WebsiteViewNames,
  WebsiteViewPaths,
  WebsiteRoutes,
  PlayerViewNames,
  PlayerViewPaths,
  PlayerRoutes as Routes,
};
