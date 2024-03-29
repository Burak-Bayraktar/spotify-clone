import {
  TAvailableDevices,
  EDeviceTypes,
  TDeviceTypes,
  EScreenTypes,
  EOSTypes,
  EOSStore,
} from 'types/WebSite/DownloadPage';
import { AppStoreBadge } from 'assets/svg/AppStoreBadge';
import { GooglePlayBadge } from 'assets/svg/GooglePlayBadge';
import MicrosoftBadge from 'assets/img/microsoft-badge.png';

export const DEVICE_INFO: TDeviceTypes[] = [
  {
    name: EDeviceTypes.iPhone,
    os: EOSTypes.iOS,
    store: EOSStore.AppStore,
    screenType: EScreenTypes.Mobile,
    link: {
      onDevice: 'itms-apps://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
      onOtherDevices: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
    },
    badge: <AppStoreBadge />,
  },
  {
    name: EDeviceTypes.Android,
    os: EOSTypes.Android,
    store: EOSStore.PlayStore,
    screenType: EScreenTypes.Mobile,
    link: 'https://play.google.com/store/apps/details?id=com.spotify.music&gl=TR',
    badge: <GooglePlayBadge />,
  },
  {
    name: EDeviceTypes.Windows,
    os: EOSTypes.Windows,
    store: EOSStore.MicrosoftStore,
    screenType: EScreenTypes.Desktop,
    link: {
      onDevice: 'ms-windows-store://pdp/?ProductId=9ncbcszsjrsb&cid=spotifyweb-windows10-store-feb18',
      onOtherDevices: 'https://apps.microsoft.com/store/detail/spotify-music-and-podcasts/9NCBCSZSJRSB?hl=en-us&gl=us',
    },
    badge: <img src={MicrosoftBadge} />,
  },
  {
    name: EDeviceTypes.Mac,
    os: EOSTypes.macOS,
    store: EOSStore.AppStore,
    screenType: EScreenTypes.Desktop,
    link: {
      onDevice: 'itms-apps://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
      onOtherDevices: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
    },
    badge: <AppStoreBadge />,
  },
  {
    name: EDeviceTypes.iPad,
    os: EOSTypes.ipadOS,
    store: EOSStore.AppStore,
    screenType: EScreenTypes.Tablet,
    link: {
      onDevice: 'itms-apps://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
      onOtherDevices: 'https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580',
    },
    badge: <AppStoreBadge />,
  },
];

export const AVAILABLE_DEVICES: TAvailableDevices[] = [
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
