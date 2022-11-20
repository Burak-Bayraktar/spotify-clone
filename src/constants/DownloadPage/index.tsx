import { AvailableDevices, OSNames, OSTypes } from 'types/WebSite/DownloadPage';
import { AppStoreBadge } from 'assets/svg/AppStoreBadge';
import { GooglePlayBadge } from 'assets/svg/GooglePlayBadge';
import MicrosoftBadge from 'assets/img/microsoft-badge.png';

export const osTypes: OSTypes[] = [
  {
    name: OSNames.iPhone,
    link: {
      onDevice: 'itms-apps://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
      onOtherDevices: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
    },
    badge: <AppStoreBadge />,
  },
  {
    name: OSNames.Android,
    link: 'https://play.google.com/store/apps/details?id=com.spotify.music&gl=TR',
    badge: <GooglePlayBadge />,
  },
  {
    name: OSNames.Windows,
    link: {
      onDevice: 'ms-windows-store://pdp/?ProductId=9ncbcszsjrsb&cid=spotifyweb-windows10-store-feb18',
      onOtherDevices: 'https://apps.microsoft.com/store/detail/spotify-music-and-podcasts/9NCBCSZSJRSB?hl=en-us&gl=us',
    },
    badge: <img src={MicrosoftBadge} />,
  },
];

export const availableDevices: AvailableDevices[] = [
  {
    title: 'Cep Telefonu',
    link: '',
    hasLink: false,
  },
  {
    title: 'Bilgisayar',
    link: '',
    hasLink: false,
  },
  {
    title: 'Tablet',
    link: '',
    hasLink: false,
  },
  {
    title: 'Araç',
    link: '',
    hasLink: true,
  },
  {
    title: 'Playstation',
    link: '',
    hasLink: true,
  },
  {
    title: 'Xbox',
    link: '',
    hasLink: true,
  },
  {
    title: 'TV',
    link: '',
    hasLink: true,
  },
  {
    title: 'Hoparlör',
    link: '',
    hasLink: true,
  },
  {
    title: 'Web Player',
    link: '',
    hasLink: true,
  },
];
