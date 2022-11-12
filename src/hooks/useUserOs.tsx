import { useEffect, useState } from 'react';

type OSTypes = {
  name: string;
  link: string;
};

export function useUserOs() {
  const osTypes: OSTypes[] = [
    {
      name: 'Windows',
      link: 'https://apps.microsoft.com/store/detail/spotify-music-and-podcasts/9NCBCSZSJRSB?hl=en-us&gl=us',
    },
    { name: 'Android', link: 'https://play.google.com/store/apps/details?id=com.spotify.music&gl=TR' },
    { name: 'iPhone', link: 'itms-apps://itunes.apple.com/app/apple-store/id375380948?mt=8' },
  ];

  const [userOs, setUserOs] = useState<OSTypes>({ name: '', link: '' });

  useEffect(() => {
    const { userAgent } = window.navigator;
    const { name, link } = osTypes.find((item) => {
      if (userAgent.search(item.name) !== -1) {
        return item.name;
      }
    })!;

    setUserOs({ name, link });
  }, []);

  return { userOs };
}
