import SpotifySpinner from 'assets/spinners/spotify-spinner';
import { useUser } from 'contexts/UserContext';
import { useUserOs } from 'hooks/useUserOs';
import { lazy, Suspense } from 'react';
import { EOSTypes } from 'types/WebSite/DownloadPage';
import './style.scss';

const WebPlayerLayout = () => {
  const { loading } = useUser();
  const { userDeviceType } = useUserOs();

  const WebPlayerHeader = lazy(() => import('views/Layout/WebPlayer/Header'));
  const WebPlayerSidebar = lazy(() => import('views/Layout/WebPlayer/Sidebar'));
  const MainSection = lazy(() => import('views/Layout/WebPlayer/Main'));
  const NowPlayingBar = lazy(() => import('views/Layout/WebPlayer/NowPlayingBar'));

  if (loading) {
    return <SpotifySpinner />;
  }

  const getDesktopVersion = () => {
    return (
      <Suspense fallback={<SpotifySpinner />}>
        <div className="web-player-container">
          <WebPlayerHeader />
          <WebPlayerSidebar />
          <MainSection />
          <NowPlayingBar />
        </div>
      </Suspense>
    );
  };

  const getMobileVersion = () => {
    return <div className="flex justify-center mt-10 uppercase font-semibold">Mobile version is under development</div>;
  };

  return userDeviceType?.os === EOSTypes.Windows ? getDesktopVersion() : getMobileVersion();
};

export default WebPlayerLayout;
