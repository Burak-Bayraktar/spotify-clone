import SpotifySpinner from 'assets/spinners/spotify-spinner';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'views/Layout/WebSite/Footer';
import Header from 'views/Layout/WebSite/Header';

const WebSiteLayout = () => {
  const { loading } = useUser();
  if (loading) {
    return <SpotifySpinner />;
  }

  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebSiteLayout;
