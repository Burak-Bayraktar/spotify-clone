import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import 'views/Content/WebSitePages/HomePage/style.scss';

const HomePage = () => {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <div className="home-page-container">
      <div className="home-page-container-body">
        <span className="title">Dinlemek her şeydir</span> <br />
        <span className="content">Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.</span>
      </div>
      <div className="home-page-container-footer">
        {user.display_name ? (
          <button onClick={() => navigate('/player')}>Dinlemeye devam et</button>
        ) : (
          <button>Spotify Free'yi Edin</button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
