import { useState } from "react";
import MenuList from "./components/MenuList";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="header-menu-container">
      <div className="header-menu">
        <MenuList />
      </div>
      <div className="header-mobile-menu-container">
        <div>
          <div
            className={`header-mobile-menu-trigger ${
              isMenuOpen ? "trigger-active" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="-line"></span>
            <span className="-line"></span>
            <span className="-line"></span>
          </div>
          <div
            className={`header-mobile-menu ${isMenuOpen ? "menu-active" : ""}`}
          >
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Destek</a>
              </li>
              <li>
                <a href="#">İndir</a>
              </li>
              <span className="-divider"></span>
              <li>
                <a href="#">Kaydol</a>
              </li>
              <li>
                <a href="#">Oturum Aç</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
