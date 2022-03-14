import { FC } from "react";

interface MenuItemProps {
  content: string;
}

const MenuItem: FC<MenuItemProps> = ({ content }) => {
  return <li>{content}</li>;
};

export default MenuItem;
