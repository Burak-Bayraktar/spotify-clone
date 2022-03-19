import LogoImg from "../../../assets/svg/LogoImg";
import FooterMenu from "../../../components/Footer/FooterMenu";
import SocialMediaSection from "../../../components/Footer/SocialMediaSection";
import "./style.css";

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
          {menuItems.map((menuItem) => {
            return <a href={menuItem.href}>{menuItem.title}</a>;
          })}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
