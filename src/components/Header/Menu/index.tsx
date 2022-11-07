import { useEffect, useState } from "react";
import { headerMenuGlobalItems, headerMenuAuthenticatedUserMenuItems as authenticatedItems, headerMenuNonAuthenticatedUserMenuItems as nonAuthenticatedItems } from "constants/MenuItems";
import { useUser } from "contexts/UserContext";
import Logo from "components/Header/Logo";
import MenuList from "components/Header/Menu/components/MenuList";
import { MenuItemProps, MenuItemTypes } from "interfaces/MenuProps";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { display_name, images } = useUser();
  const { state, pathname } = useLocation();


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style' || '');
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (state?.from !== pathname) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  function setUserLoginMenuItems(): MenuItemProps[] {
    return display_name ? authenticatedItems : nonAuthenticatedItems;
  }

  function setTriggerStateOnMenuOpen(): string {
    return isMobileMenuOpen ? "trigger-active" : "";
  }

  function setItems(type : MenuItemTypes): MenuItemProps[] {
    const loginItems = setUserLoginMenuItems();

    if (!display_name) {
      return [...headerMenuGlobalItems, ...loginItems];
    }

    let items: MenuItemProps[] = [];
    switch (type) {
      case MenuItemTypes.DESKTOP:
        items = loginItems.filter(item => {
          return item.isItemForMobileMenu ? '' : item
        })
      break;
      case MenuItemTypes.MOBILE:
        items = loginItems.filter(item => {
          return item.isItemForMobileMenu && item
        })
      break;
      default:
      break;
    }

    return [...headerMenuGlobalItems, ...items];
  }

  return (
    <>
      <nav className={`header-menu-container`}>
        <div className="header-menu">
          <MenuList dividerLine={3} menuItems={setItems(MenuItemTypes.DESKTOP)} />
        </div>
      </nav>
      <nav className="header-mobile-menu-container">
          {display_name && <img src={images[0].url} alt="user-image" />}
          <div
            className={`header-mobile-menu-trigger ${setTriggerStateOnMenuOpen()}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="-line"></span>
          </div>
          <div className={`header-mobile-menu ${isMobileMenuOpen ? "menu-active" : ""}`}>
            <MenuList menuItems={setItems(MenuItemTypes.MOBILE)} dividerLine={3} />
            <Logo />
          </div>
          {isMobileMenuOpen && <div className="overlay" />}
      </nav>
    </>
  );
};

export default Menu;
