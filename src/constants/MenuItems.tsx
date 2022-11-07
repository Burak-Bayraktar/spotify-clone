import UserMiniIndicator from "components/Header/Menu/components/UserMiniIndicator";
import { FooterMegaMenuProps, MenuItemProps } from "interfaces/MenuProps";

export const headerMenuGlobalItems: MenuItemProps[] = [
  { href: "/premium", title: "Premium", internalNavigate: true },
  { href: "/support", title: "Destek", internalNavigate: true },
  { href: "/download", title: "İndir", internalNavigate: true },
];

export const headerMenuAuthenticatedUserMenuItems: MenuItemProps[] = [
  { href: '/profile', title: <UserMiniIndicator />, internalNavigate: true, isItemForMobileMenu: false, isItemForAuthenticatedUser: true},
  { href: '/profile', title: "Hesap", internalNavigate: true, isItemForMobileMenu: true, isItemForAuthenticatedUser: true},
  { href: '/logout', title: "Oturumu Kapat", internalNavigate: true, isItemForMobileMenu: true, isItemForAuthenticatedUser: true },
]

export const headerMenuNonAuthenticatedUserMenuItems: MenuItemProps[] = [
  { href: "/register", title: "Kaydol", internalNavigate: false, isItemForAuthenticatedUser: false },
  { href: "/login", title: "Oturum Aç", internalNavigate: false, isItemForAuthenticatedUser: false },
]

export const footerMenuItems: MenuItemProps[] = [
  { title: "Yasal", href: "#", internalNavigate: true },
  { title: "Gizlilik Merkezi", href: "#", internalNavigate: true },
  { title: "Gizlilik Politikası", href: "#", internalNavigate: true },
  { title: "Tanımlama Bilgileri", href: "#", internalNavigate: true },
  { title: "Reklamlar Hakkında", href: "#", internalNavigate: true },
];

export const footerMegaMenuItems: FooterMegaMenuProps[] = [
  {
    title: "Şirket",
    subItems: [
      { title: "Hakkında", href: "#", internalNavigate: true },
      { title: "For the Record", href: "#", internalNavigate: true },
    ],
  },
  {
    title: "Topluluklar",
    subItems: [
      { title: "Sanatçılar İçin", href: "#", internalNavigate: true },
      { title: "Geliştiriciler", href: "#", internalNavigate: true },
      { title: "Reklam", href: "#", internalNavigate: true },
      { title: "Yatırımcılar", href: "#", internalNavigate: true },
      { title: "Satıcılar", href: "#", internalNavigate: true },
    ],
  },
  {
    title: "Yararlı Bağlantılar",
    subItems: [
      { title: "Destek", href: "#", internalNavigate: true },
      { title: "Web Çalar", href: "#", internalNavigate: true },
      { title: "Ücretsiz Mobil Uygulama", href: "#", internalNavigate: true },
    ],
  },
];
