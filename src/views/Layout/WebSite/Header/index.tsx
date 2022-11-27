import { FC } from 'react';
import Logo from 'components/WebSite/Header/Logo';
import Menu from 'components/WebSite/Header/Menu';
import 'views/Layout/WebSite/Header/style.scss';

const Header: FC = () => {
  return (
    <>
      <div className="header-container">
        <Logo />
        <Menu />
      </div>
    </>
  );
};

export default Header;
