import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuProps } from "../../../../interfaces/MenuProps";

const MenuItem: FC<MenuProps> = ({ content, setIsMenuOpen }) => {
  return (
    <li>
      {
        content.internalNavigate
        ? <Link onClick={() => setIsMenuOpen(false)} to={content.href}>{content.title}</Link>
        : <a href={content.href} target="_blank">{content.title}</a>
      }
      
    </li>
  );
};

export default MenuItem;
