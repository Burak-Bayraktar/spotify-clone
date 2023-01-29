import { Route, Routes } from 'react-router-dom';
import { webSiteRoutes } from './routes';

function WebSiteApp() {
  const { layout, home, premium, download, redirect, login } = webSiteRoutes;
  return (
    <Routes>
      <Route path={layout.path} element={<layout.element />}>
        <Route path={home.path} element={<home.element />} />
        <Route path={premium.path} element={<premium.element />} />
        <Route path={download.path} element={<download.element />} />
        <Route path={redirect.path} element={<redirect.element />} />
        <Route path={login.path} element={<login.element />} />
      </Route>
    </Routes>
  );
}

export default WebSiteApp;
