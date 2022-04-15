import MenuItem from "../components/MenuItem";

export interface Props {
  menuItems: string[];
  dividerLine: number;
}

const MenuList = ({ menuItems, dividerLine }: Props) => {
  return (
    <ul>
      {menuItems.map((itemTitle: string, index) => {
        if (index === dividerLine) {
          return (
            <>
            <li>
              <span className="-divider"></span>
            </li>
            <MenuItem key={index} content={itemTitle} />
            </>
          );
        }

        return <MenuItem key={index} content={itemTitle} />;
      })}
    </ul>
  );
};

export default MenuList;
