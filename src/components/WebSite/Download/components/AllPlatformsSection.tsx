import AllDevices from 'assets/svg/AllDevices';
import { availableDevices } from 'constants/DownloadPage';
import { nanoid } from 'nanoid';

export const AllPlatformsSection = () => {
  return (
    <section className="download-page-section all-platforms">
      <div className="all-platforms-image">
        <AllDevices />
      </div>
      <div className="all-platforms-description">Tek hesapla her yerde dinle.</div>
      <div className="all-platforms-links">
        <ul className="all-platforms-links-group">
          {availableDevices.map((device) => {
            return (
              <li key={nanoid()} className="all-platforms-links-item">
                <span>{device.hasLink ? <a href={device.link}>{device.title}</a> : device.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
