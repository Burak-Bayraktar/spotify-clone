import { Route, Routes } from "react-router-dom";
import HomePage from "./views/Content/HomePage";
import PremiumPage from "./views/Content/PremiumPage";
import RedirectPage from "./views/Content/RedirectPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </div>
  );
}

export default App;
