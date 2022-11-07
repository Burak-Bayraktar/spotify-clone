import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItemProps, MenuItemTypes, MenuProps } from "interfaces/MenuProps";

const MenuItem: FC<MenuProps> = ({ content }) => {
  const {pathname} = useLocation();

  const setInternalLink = (content: MenuItemProps) => {
    switch (typeof content.title) {
      case "string":
        return <Link className="list-item-link" to={content.href} state={{ from: pathname }}>{content.title}</Link>        
      case "object":
        return content.title
      default:
        break;
    }
  }

  return (
    <li className="list-item">
      {
        content.internalNavigate
        ? setInternalLink(content)
        : <a href={content.href} target="_blank">{content.title}</a>
      }
    </li>
  );
};

export default MenuItem;
