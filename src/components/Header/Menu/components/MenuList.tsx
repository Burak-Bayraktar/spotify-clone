import MenuItem from "../components/MenuItem";

const MenuList = () => {
  const menuItemsTitle:string[] = ["Premium", "Destek", "İndir", "Kaydol", "Oturum Aç"];
  return (
    <ul>
      {menuItemsTitle.map((itemTitle:string, index) => {
        return <MenuItem key={index} content={itemTitle} />;
      })}
    </ul>
  );
};

export default MenuList;
