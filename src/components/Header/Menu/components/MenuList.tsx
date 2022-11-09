import { MenuItemProps } from 'interfaces/MenuProps';
import MenuItem from 'components/Header/Menu/components/MenuItem';
import { Fragment } from 'react';

interface Props {
  menuItems: MenuItemProps[];
  dividerLine: number;
}

const MenuList = ({ menuItems, dividerLine }: Props) => {
  return (
    <ul className="top-menu">
      {menuItems.map((item: MenuItemProps, index) => {
        if (index === dividerLine) {
          return (
            <Fragment key={index}>
              <li className="list-item">
                <span className="-divider"></span>
              </li>
              <MenuItem content={item} />
            </Fragment>
          );
        }

        return <MenuItem key={index} content={item} />;
      })}
    </ul>
  );
};

export default MenuList;
