import { Route, Routes } from 'react-router-dom';
import CollectionPage from './Content/WebPlayerPages/CollectionPage';
import { webPlayerRoutes } from './routes';

const WebPlayerApp = () => {
  const { layout, home, playlist, search, collection } = webPlayerRoutes;
  return (
    <Routes>
      <Route path={layout.path} element={<layout.element />}>
        <Route path={home.path} element={<home.element />} />
        <Route path={playlist.path} element={<playlist.element />} />
        <Route path={search.path} element={<search.element />} />
        <Route path={collection.path} element={<collection.element />}>
          <Route path=":collectionType" element={<CollectionPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default WebPlayerApp;
