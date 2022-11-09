import { SubwayWorld } from 'assets/svg/World';
import FooterMenu from 'components/Footer/FooterMenu';
import SocialMediaSection from 'components/Footer/SocialMediaSection';
import Logo from 'components/Header/Logo';
import { footerMenuItems } from 'constants/MenuItems';
import 'views/Layout/WebSite/Footer/style.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <nav>
        <div className="top">
          <div className="logo-container">
            <Logo />
          </div>
          <FooterMenu />
          <SocialMediaSection />
        </div>
        <div className="bottom">
          <div className="country">
            <SubwayWorld /> <span className="country-name">Türkiye</span>
          </div>
          <div className="bottom-section">
            <div className="bottom-items">
              {footerMenuItems.map((menuItem) => {
                return (
                  <a className="bottom-item" href={menuItem.href}>
                    {menuItem.title}
                  </a>
                );
              })}
            </div>
            <div className="copyright">
              <span>© 2022 Spotify AB</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
