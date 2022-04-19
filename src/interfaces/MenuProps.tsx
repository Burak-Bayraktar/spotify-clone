export interface MenuItemProps {
    href: string, 
    title: string,
    internalNavigate: boolean
}

export interface MenuProps {
    content: MenuItemProps,
    setIsMenuOpen: Function
  }

export interface FooterMegaMenuProps {
    title: string,
    subItems: Array<MenuItemProps>
}