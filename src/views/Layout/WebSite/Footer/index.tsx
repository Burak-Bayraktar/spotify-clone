import LogoImg from "../../../../assets/svg/LogoImg";
import { SubwayWorld } from "../../../../assets/svg/World";
import FooterMenu from "../../../../components/Footer/FooterMenu";
import SocialMediaSection from "../../../../components/Footer/SocialMediaSection";
import "./style.scss";

interface MenuItem {
  title: string;
  href: string;
}

const Footer = () => {
  const menuItems: MenuItem[] = [
    { title: "Yasal", href: "#" },
    { title: "Gizlilik Merkezi", href: '#'},
    { title: "Gizlilik Politikası", href: '#'},
    { title: "Tanımlama Bilgileri", href: '#'},
    { title: "Reklamlar Hakkında", href: '#'},
  ];

  return (
    <div className="footer-container">
      <nav>
        <div className="top">
          <div className="logo-container">
            <LogoImg />
          </div>
          <FooterMenu />
          <SocialMediaSection />
        </div>
        <div className="bottom">
          <div className="country"><SubwayWorld /> <span className="country-name">Türkiye</span></div>
          <div className="bottom-section">
            <div className="bottom-items">
            {menuItems.map((menuItem) => {
              return <a className="bottom-item" href={menuItem.href}>{menuItem.title}</a>;
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
