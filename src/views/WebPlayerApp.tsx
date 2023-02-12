import { Navigate, Route, Routes } from 'react-router-dom';
import CollectionPage from './Content/WebPlayerPages/CollectionPage';
import { webPlayerRoutes } from './routes';

const WebPlayerApp = () => {
  const { layout, home, playlist, search, collection, user, preferences } = webPlayerRoutes;
  return (
    <Routes>
      <Route path={layout.path} element={<layout.element />}>
        <Route path="/player" element={<Navigate to="/player/home" />} />
        <Route path={home.path} element={<home.element />} />
        <Route path={playlist.path} element={<playlist.element />} />
        <Route path={search.path} element={<search.element />} />
        <Route path={collection.path} element={<collection.element />}>
          <Route path=":collectionType" element={<CollectionPage />} />
        </Route>
        <Route path={user.path} element={<user.element />} />
        <Route path={preferences.path} element={<preferences.element />} />
      </Route>
    </Routes>
  );
};

export default WebPlayerApp;
