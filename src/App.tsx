import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/Auth/Login";
import DownloadPage from "./views/Content/DownloadPage";
import HomePage from "./views/Content/HomePage";
import PremiumPage from "./views/Content/PremiumPage";
import RedirectPage from "./views/Content/RedirectPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
