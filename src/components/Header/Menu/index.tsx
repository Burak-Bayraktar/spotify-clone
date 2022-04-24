import { useEffect, useState } from "react";
import { headerMenuItems } from "../../../constants/MenuItems";
import { useUser } from "../../../contexts/UserContext";
import Logo from "../Logo";
import MenuList from "./components/MenuList";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { display_name } = useUser();

  useEffect(() => {
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 100);
  }, []);

  function setUserLoginMenuItems() {
    if (display_name) {
      return (
        [{ href: '/profile', title: 'Hello byrktrhmx', internalNavigate: true}]
      )
    }
  
    return (
      [{ href: "/register", title: "Kaydol", internalNavigate: false },
      { href: "/login", title: "Oturum Aç", internalNavigate: false }]
    )
  }

  const items = [...headerMenuItems, ...setUserLoginMenuItems()]
  return (
    <>
      <nav
        className={`header-menu-container ${
          isMenuVisible ? "-visible" : "-invisible"
        }`}
      >
        <div className="header-menu">
          <MenuList setIsMenuOpen={setIsMenuOpen} dividerLine={3} menuItems={items} />
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
            <MenuList setIsMenuOpen={setIsMenuOpen} menuItems={items} dividerLine={3} />
            <Logo setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
