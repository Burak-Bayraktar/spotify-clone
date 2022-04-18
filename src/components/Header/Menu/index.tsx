import { useEffect, useState } from "react";
import { headerMenuItems } from "../../../constants/MenuItems";
import Logo from "../Logo";
import MenuList from "./components/MenuList";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 100);
  }, []);

  return (
    <>
      <nav
        className={`header-menu-container ${
          isMenuVisible ? "-visible" : "-invisible"
        }`}
      >
        <div className="header-menu">
          <MenuList setIsMenuOpen={setIsMenuOpen} dividerLine={3} menuItems={headerMenuItems} />
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
            <MenuList setIsMenuOpen={setIsMenuOpen} menuItems={headerMenuItems} dividerLine={3} />
            <Logo setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
