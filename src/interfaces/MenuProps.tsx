export interface MenuItemProps {
    href: string, 
    title: string
}

export interface MenuProps {
    content: MenuItemProps,
    setIsMenuOpen: Function
  }

export interface FooterMegaMenuProps {
    title: string,
    subItems: Array<MenuItemProps>
}