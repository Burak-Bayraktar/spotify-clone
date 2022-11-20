import SpotifySpinner from 'assets/spinners/spotify-spinner';
import { GreenCircle } from 'assets/svg/GreenCircle';
import { GreenSuccessCheck } from 'assets/svg/GreenSuccessCheck';
import { Laptop } from 'assets/svg/Laptop';
import MobilePhone from 'assets/svg/MobilePhone';
import { useUserOs } from 'hooks/useUserOs';
import React from 'react';
import { EScreenTypes } from 'types/WebSite/DownloadPage';

export const DownloadSection = () => {
  const { userDeviceType } = useUserOs();

  if (!userDeviceType) {
    return <SpotifySpinner />;
  }

  const renderScreenTypeSvg = () => {
    switch (userDeviceType.screenType) {
      case EScreenTypes.Desktop:
        return (
          <div className="laptop-container">
            <Laptop />
            <GreenCircle />
            <GreenSuccessCheck />
          </div>
        );
      case EScreenTypes.Mobile:
      case EScreenTypes.Tablet:
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
        <a className="download-button" href={userDeviceType.link as string} target="_blank">
          İndir
        </a>
      </div>
    </section>
  );
};
