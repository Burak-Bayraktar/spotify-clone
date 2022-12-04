import SpotifySpinner from 'assets/spinners/spotify-spinner';
import { useUser } from 'contexts/UserContext';
import { useUserOs } from 'hooks/useUserOs';
import { EOSTypes } from 'types/WebSite/DownloadPage';
import WebPlayerHeader from 'views/Layout/WebPlayer/Header';
import MainSection from 'views/Layout/WebPlayer/Main';
import WebPlayerSidebar from 'views/Layout/WebPlayer/Sidebar';
import NowPlayingBar from './NowPlayingBar';
import './style.scss';

const WebPlayerLayout = () => {
  const { loading } = useUser();
  const { userDeviceType } = useUserOs();

  if (loading) {
    return <SpotifySpinner />;
  }

  const getDesktopVersion = () => {
    return (
      <div className="web-player-container">
        <WebPlayerHeader />
        <WebPlayerSidebar />
        <MainSection />
        <NowPlayingBar />
      </div>
    );
  };

  const getMobileVersion = () => {
    return <div className="flex justify-center mt-10 uppercase font-semibold">Mobile version is under development</div>;
  };

  return userDeviceType?.os === EOSTypes.Windows ? getDesktopVersion() : getMobileVersion();
};

export default WebPlayerLayout;
