import { useEffect, useState } from "react";
import LogoImg from "../../../assets/svg/LogoImg";
import MenuList from "./components/MenuList";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItemsTitle:string[] = ["Premium", "Destek", "İndir", "Kaydol", "Oturum Aç"];
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuVisible(true)
    }, 100)
  }, [])

  return (<>
    <nav className={`header-menu-container ${isMenuVisible ? '-visible' : '-invisible'}`}>
      <div className="header-menu">
        <MenuList dividerLine={3} menuItems={menuItemsTitle} />
      </div>
    </nav>
    <nav className="header-mobile-menu-container">
        <div>
          <div
            className={`header-mobile-menu-trigger ${
              isMenuOpen ? "trigger-active" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="-line"></span>
          </div>
          <div
            className={`header-mobile-menu ${isMenuOpen ? "menu-active" : ""}`}
          >
            <MenuList menuItems={menuItemsTitle} dividerLine={3} />
            <LogoImg />
          </div>
        </div>
    </nav></>
  );
};

export default Menu;
