import { MenuItemProps } from "../../../../interfaces/MenuProps";
import MenuItem from "../components/MenuItem";

interface Props {
  menuItems: MenuItemProps[],
  dividerLine: number,
  setIsMenuOpen: Function
}

const MenuList = ({ menuItems, dividerLine, setIsMenuOpen }: Props) => {
  return (
    <ul>
      {menuItems.map((item: MenuItemProps, index) => {
        if (index === dividerLine) {
          return (
            <>
            <li>
              <span className="-divider"></span>
            </li>
            <MenuItem setIsMenuOpen={setIsMenuOpen} content={item} />
            </>
          );
        }

        return <MenuItem setIsMenuOpen={setIsMenuOpen} content={item} />;
      })}
    </ul>
  );
};

export default MenuList;
