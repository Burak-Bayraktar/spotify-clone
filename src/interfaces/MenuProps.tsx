export interface MenuItemProps {
  href: string;
  title: string | any;
  isItemForAuthenticatedUser?: boolean;
  isItemForMobileMenu?: boolean;
  internalNavigate: boolean;
}

export interface MenuProps {
  content: MenuItemProps;
}

export enum MenuItemTypes {
  'DESKTOP',
  'MOBILE',
  NULL = '',
}

export interface FooterMegaMenuProps {
  title: string;
  subItems: Array<MenuItemProps>;
}
