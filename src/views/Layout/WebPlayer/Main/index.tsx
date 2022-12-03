import { Outlet } from 'react-router-dom';
import WebPlayerFooter from 'views/Layout/WebPlayer/Footer';

const MainSection = () => {
  return (
    <main className="main-section-container">
      <Outlet />
      <WebPlayerFooter />
    </main>
  );
};

export default MainSection;
