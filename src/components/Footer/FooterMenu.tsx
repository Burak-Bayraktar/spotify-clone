import React from "react";

type Props = {};

export default function FooterMenu(props: Props) {
  const menuItems: object[] = [
    {
      Şirket: ["Hakkında", "Kariyer", "For the Record"],
    },
    {
      Topluluklar: [
        "Sanatçılar İçin",
        "Geliştiriciler",
        "Reklam",
        "Yatırımcılar",
        "Satıcılar",
      ],
    },
    {
      "Yararlı Bağlantılar": ["Destek", "Web Çalar", "Ücretsiz Mobil Uygulama"],
    },
  ];

  return (
    <div className="footer-menu">
      {menuItems.map((item, index) => {
        const key: string = Object.keys(item)[0];
        const values: string[] = Object.values(item)[0];

        return (
          <div className="menu-column" key={index}>
            <span className="menu-row-title">{key}</span>
            <div className="menu-row-content">
              {values.map((i, index) => (
                <a href="#" className="title" key={index}>
                  {i}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
