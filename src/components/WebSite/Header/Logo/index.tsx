import { Link } from 'react-router-dom';
import LogoImg from 'assets/svg/LogoImg';

const Logo = () => {
  return (
    <div className="header-logo">
      <span>
        <Link to={'/'}>
          <LogoImg />
        </Link>
      </span>
    </div>
  );
};

export default Logo;
