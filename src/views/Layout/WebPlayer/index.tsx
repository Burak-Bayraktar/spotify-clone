import { useMemo, lazy, Suspense } from 'react';
import { useUser } from 'contexts/UserContext';
import { useUserOs } from 'hooks/useUserOs';
import { EOSTypes } from 'types/WebSite/DownloadPage';
import useGetActiveSubComponent from './Header/hooks/useGetActiveSubComponent';
import SpotifySpinner from 'assets/spinners/spotify-spinner';
import './style.scss';

const WebPlayerLayout = () => {
  const { loading } = useUser();
  const { userDeviceType } = useUserOs();
  const { activeSubHeaderComponent } = useGetActiveSubComponent();

  const WebPlayerHeader = useMemo(() => lazy(() => import('views/Layout/WebPlayer/Header')), []);
  const WebPlayerSidebar = useMemo(() => lazy(() => import('views/Layout/WebPlayer/Sidebar')), []);
  const MainSection = useMemo(() => lazy(() => import('views/Layout/WebPlayer/Main')), []);
  const NowPlayingBar = useMemo(() => lazy(() => import('views/Layout/WebPlayer/NowPlayingBar')), []);

  if (loading) {
    return <SpotifySpinner />;
  }

  const getDesktopVersion = () => {
    return (
      <Suspense fallback={<SpotifySpinner />}>
        <div className="web-player-container">
          <WebPlayerHeader Children={activeSubHeaderComponent} />
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
