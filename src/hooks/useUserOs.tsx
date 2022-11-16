import { AppStoreBadge } from 'assets/svg/AppStoreBadge';
import { ReactElement, useEffect, useState } from 'react';
import MicrosoftBadge from 'assets/img/microsoft-badge.png';
import { GooglePlayBadge } from 'assets/svg/GooglePlayBadge';

type OSTypes = {
  name: string;
  link: string;
  badge: ReactElement;
};

enum OSNames {
  Windows = 'Windows',
  Android = 'Android',
  iPhone = 'iPhone',
}

export function useUserOs() {
  const osTypes: OSTypes[] = [
    {
      name: OSNames.iPhone,
      link: 'itms-apps://itunes.apple.com/app/apple-store/id375380948?mt=8',
      badge: <AppStoreBadge />,
    },
    {
      name: OSNames.Android,
      link: 'https://play.google.com/store/apps/details?id=com.spotify.music&gl=TR',
      badge: <GooglePlayBadge />,
    },
    {
      name: OSNames.Windows,
      link: 'https://apps.microsoft.com/store/detail/spotify-music-and-podcasts/9NCBCSZSJRSB?hl=en-us&gl=us',
      badge: <img src={MicrosoftBadge} />,
    },
  ];

  const [userOs, setUserOs] = useState<OSTypes>({ name: '', link: '', badge: <div /> });

  useEffect(() => {
    const { userAgent } = window.navigator;
    const { name, link, badge } = osTypes.find((item) => {
      if (userAgent.search(item.name) !== -1) {
        return item.name;
      }
    })!;

    setUserOs({ name, link, badge });
  }, []);

  return { userOs, allOsTypes: osTypes };
}
