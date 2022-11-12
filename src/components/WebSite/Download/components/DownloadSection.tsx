import { GreenCircle } from 'assets/svg/GreenCircle';
import { GreenSuccessCheck } from 'assets/svg/GreenSuccessCheck';
import { Laptop } from 'assets/svg/Laptop';
import { Link } from 'react-router-dom';

export const DownloadSection = () => {
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
        <Link className="download-button" to={'#'}>
          İndir
        </Link>
      </div>
    </section>
  );
};
