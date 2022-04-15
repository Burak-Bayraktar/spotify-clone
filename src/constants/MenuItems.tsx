import { FooterMegaMenuProps, MenuItemProps } from "../interfaces/MenuProps";

export const headerMenuItems: MenuItemProps[] = [
  { href: "/premium", title: "Premium" },
  { href: "/support", title: "Destek" },
  { href: "/download", title: "İndir" },
  { href: "/register", title: "Kaydol" },
  { href: "/login", title: "Oturum Aç" },
];

export const footerMenuItems: MenuItemProps[] = [
  { title: "Yasal", href: "#" },
  { title: "Gizlilik Merkezi", href: "#" },
  { title: "Gizlilik Politikası", href: "#" },
  { title: "Tanımlama Bilgileri", href: "#" },
  { title: "Reklamlar Hakkında", href: "#" },
];

export const footerMegaMenuItems: FooterMegaMenuProps[] = [
  {
    title: "Şirket",
    subItems: [
      { title: "Hakkında", href: "#" },
      { title: "For the Record", href: "#" },
    ],
  },
  {
    title: "Topluluklar",
    subItems: [
      { title: "Sanatçılar İçin", href: "#" },
      { title: "Geliştiriciler", href: "#" },
      { title: "Reklam", href: "#" },
      { title: "Yatırımcılar", href: "#" },
      { title: "Satıcılar", href: "#" },
    ],
  },
  {
    title: "Yararlı Bağlantılar",
    subItems: [
      { title: "Destek", href: "#" },
      { title: "Web Çalar", href: "#" },
      { title: "Ücretsiz Mobil Uygulama", href: "#" },
    ],
  },
];
