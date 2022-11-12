import { GreenCircle } from 'assets/svg/GreenCircle';
import { GreenSuccessCheck } from 'assets/svg/GreenSuccessCheck';
import { Laptop } from 'assets/svg/Laptop';
import { useUserOs } from 'hooks/useUserOs';
import React from 'react';

export const DownloadSection = () => {
  const { userOs } = useUserOs();

  return (
    <section className="download-page-section download-section">
      <div className="laptop-container">
        <Laptop />
        <GreenCircle />
        <GreenSuccessCheck />
      </div>
      <div className="download-section-content">
        <div className="title">Spotify'ı İndir</div>
        <div className="description">Cihazında milyonlarca şarkı ve podcast çal.</div>
        <a className="download-button" href={userOs.link} target="_blank">
          İndir
        </a>
      </div>
    </section>
  );
};
