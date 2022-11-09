import { Route, Routes } from 'react-router-dom';
import LoginPage from 'views/Auth/Login';
import HomePage from 'views/Content/WebSitePages/HomePage';
import RedirectPage from 'views/Content/WebSitePages/RedirectPage';
import PremiumPage from 'views/Content/WebSitePages/PremiumPage';
import WebSiteLayout from 'views/Layout/WebSite';
import DownloadPage from 'views/Content/WebSitePages/DownloadPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<WebSiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="premium" element={<PremiumPage />} />
          <Route path="download" element={<DownloadPage />} />
          <Route path="redirect" element={<RedirectPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
