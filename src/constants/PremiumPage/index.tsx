import { PremiumPageHeader } from "interfaces/PremiumPageHeader";

export const ppHeaderTitles = {
    section_top: { title: "Neden Premium'a geçmelisin?" },
    section_bottom: {
      title: "Premium'unu seç",
      subtitle: "Telefonunda, hoparlöründe ve diğer cihazlarında sınırsız dinle.",
    },
  };

export const ppContentItems : PremiumPageHeader[] = [
  { title: "Müzik indir.", subtitle: "İstediğin yerde dinle." },
  { title: "Reklamsız müzik dinle.", subtitle: "Kesintisiz müziğin keyfini çıkar." },
  { title: "İstediğin şarkıyı çal.", subtitle: "Mobil cihazında bile." },
  { title: "Sınırsız şarkı atlama hakkı.", subtitle: "Sonraki düğmesine basman yeterli." },
];

export const contentsOfOffers = [
  {
    label_offers: {
      label_title: "{ot} ücretsiz",
      label_desc: "Bir defalık ödeme yapılabilir",
    },
    offer_type: "Bireysel",
    offer_desc: {
      text: "Teklif döneminden sonra ayda {pad}",
      total_account_text: "{ac} hesap",
      account_count: "1"
    },
    content: [
      "Reklamsız müzik dinle",
      "Her yerde çal, hatta çevrimdışı dinle",
      "İstediğin zaman çal"
    ],
    offer_range: "{ot} ücretsiz kullan",
    offer_deadline: "12 Mayıs 2022",
    price_afterdeadline: "17.99 TL",
    offer_time: "3 ay",
    other_options: true,
    credits: `
      Yalnızca Bireysel plan için geçerlidir. Sonra ayda {pad}. Hüküm ve koşullar geçerlidir. 
      Sadece Premium'u henüz denememiş kullanıcılar yararlanabilir. 
      Teklif {od} tarihinde sona erecek.
    `
  },
  {
    label_offers: {
      label_title: "{ot} ücretsiz",
      label_desc: "",
    },
    offer_type: "Duo",
    offer_desc: {
      text: "Teklif döneminden sonra ayda {pad}",
      total_account_text: "{ac} hesap",
      account_count: "2"
    },
    content: [
      "Aynı çatı altında yaşayan çiftler için 2 Premium hesabı",
      "Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal",
    ],
    offer_range: "{ot} ücretsiz kullan",
    price_afterdeadline: "23.99 TL",
    offer_time: "1 ay",
    other_options: true,
    credits: `
      Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan kullanıcılar {od} aylık ücretsiz tekliften yararlanamaz.
    `
  },
  {
    label_offers: {
      label_title: "{ot} ücretsiz",
      label_desc: "",
    },
    offer_type: "Aile",
    offer_desc: {
      text: "Teklif döneminden sonra ayda {pad}",
      total_account_text: "{ac} hesap",
      account_count: "6"
    },
    content: [
      "Aynı çatı altında yaşayan aile üyeleri için 6 ayrı Premium hesabı",
      "Sansürsüz müziği engelle",
      "Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal"
    ],
    offer_range: "{ot} ücretsiz kullan",
    price_afterdeadline: "29.99 TL",
    offer_time: "1 ay",
    other_options: false,
    credits: `
      Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan kullanıcılar {od} aylık ücretsiz tekliften yararlanamaz.
    `
  },
  {
    label_offers: {
      label_title: "{ot} ücretsiz",
      label_desc: "",
    },
    offer_type: "Öğrenci",
    offer_desc: {
      text: "Teklif döneminden sonra ayda {pad}",
      total_account_text: "{ac} hesap",
      account_count: "1"
    },
    content: [
      "Yararlanabilecek üniversite öğrencilerine özel indirim",
      "Reklamsız müzik dinle",
      "Her yerde çal, hatta çevrimdışı dinle",
      "İstediğin zaman çal"
    ],
    offer_range: "{ot} ücretsiz kullan",
    price_afterdeadline: "8.99 TL",
    offer_time: "1 ay",
    other_options: false,
    credits: `
      Teklif, yalnızca akredite olan yüksek öğrenim kurumlarındaki öğrenciler için geçerlidir. Premium'u daha önce denemiş olan kullanıcılar {od} aylık ücretsiz tekliften yararlanamaz. Spotify Öğrenci İndirimi Teklifi Hüküm ve koşullar geçerlidir.
    `
  },

]