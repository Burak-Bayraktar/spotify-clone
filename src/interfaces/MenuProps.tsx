export interface MenuItemProps {
    href: string, 
    title: string
}

export interface MenuProps {
    content: MenuItemProps,
  }

export interface FooterMegaMenuProps {
    title: string,
    subItems: Array<MenuItemProps>
}