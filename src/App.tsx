import { Route, Routes } from "react-router-dom";
import HomePage from "./views/Content/HomePage";
import PremiumPage from "./views/Content/PremiumPage";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
      </Routes>
    </div>
  );
}

export default App;
