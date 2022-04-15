import { MenuItemProps } from "../../../../interfaces/MenuProps";
import MenuItem from "../components/MenuItem";

export interface Props {
  menuItems: MenuItemProps[];
  dividerLine: number;
}

const MenuList = ({ menuItems, dividerLine }: Props) => {
  return (
    <ul>
      {menuItems.map((item: MenuItemProps, index) => {
        if (index === dividerLine) {
          return (
            <>
            <li>
              <span className="-divider"></span>
            </li>
            <MenuItem content={item} />
            </>
          );
        }

        return <MenuItem content={item} />;
      })}
    </ul>
  );
};

export default MenuList;
