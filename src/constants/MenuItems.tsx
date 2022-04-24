import { FooterMegaMenuProps, MenuItemProps } from "../interfaces/MenuProps";

export const headerMenuItems: MenuItemProps[] = [
  { href: "/premium", title: "Premium", internalNavigate: true },
  { href: "/support", title: "Destek", internalNavigate: true },
  { href: "/download", title: "İndir", internalNavigate: true },
];

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
