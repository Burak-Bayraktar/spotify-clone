import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuProps } from "../../../../interfaces/MenuProps";

const MenuItem: FC<MenuProps> = ({ content, setIsMenuOpen }) => {
  return (
    <li>
      <Link onClick={() => setIsMenuOpen(false)} to={content.href}>{content.title}</Link>
    </li>
  );
};

export default MenuItem;
