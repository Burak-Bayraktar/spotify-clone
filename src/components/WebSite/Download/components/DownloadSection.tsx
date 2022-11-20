import SpotifySpinner from 'assets/spinners/spotify-spinner';
import { GreenCircle } from 'assets/svg/GreenCircle';
import { GreenSuccessCheck } from 'assets/svg/GreenSuccessCheck';
import { Laptop } from 'assets/svg/Laptop';
import MobilePhone from 'assets/svg/MobilePhone';
import { useUserOs } from 'hooks/useUserOs';
import React from 'react';
import { ScreenTypes } from 'types/WebSite/DownloadPage';

export const DownloadSection = () => {
  const { userOs } = useUserOs();

  if (!userOs) {
    return <SpotifySpinner />;
  }

  const renderScreenTypeSvg = () => {
    switch (userOs.screenType) {
      case ScreenTypes.Desktop:
        return (
          <div className="laptop-container">
            <Laptop />
            <GreenCircle />
            <GreenSuccessCheck />
          </div>
        );
      case ScreenTypes.Mobile:
        return (
          <div className="mobile-container">
            <MobilePhone />
            <GreenCircle />
            <GreenSuccessCheck />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <section className="download-page-section download-section">
      {renderScreenTypeSvg()}
      <div className="download-section-content">
        <div className="title">Spotify'ı İndir</div>
        <div className="description">Cihazında milyonlarca şarkı ve podcast çal.</div>
        <a className="download-button" href={userOs.link as string} target="_blank">
          İndir
        </a>
      </div>
    </section>
  );
};
