import { Route, Routes } from 'react-router-dom';
import WebPlayerLayout from 'views/Layout/WebPlayer';
import PlayerHomePage from './Content/WebPlayerPages/HomePage';
import PlaylistPage from './Content/WebPlayerPages/PlaylistPage';
import SearchPage from './Content/WebPlayerPages/SearchPage';
import UserLibrary from './Content/WebPlayerPages/UserLibrary';

const WebPlayerApp = () => {
  return (
    <Routes>
      <Route path="/player" element={<WebPlayerLayout />}>
        <Route path="home" element={<PlayerHomePage />} />
        <Route path="playlist" element={<PlaylistPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="collection" element={<UserLibrary />} />
      </Route>
    </Routes>
  );
};

export default WebPlayerApp;
