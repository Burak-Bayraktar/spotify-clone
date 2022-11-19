import { useEffect, useState } from 'react';
import { OSTypes, UserOsLinks } from 'types/WebSite/DownloadPage';
import { osTypes } from 'constants/DownloadPage';

export function useUserOs() {
  const [userOs, setUserOs] = useState<OSTypes>({ name: '', link: '', badge: <div /> });
  const [items, setItems] = useState<OSTypes[]>([]);

  function isObject(link: UserOsLinks | string): link is UserOsLinks {
    return (link as UserOsLinks).onDevice !== undefined;
  }

  function setObjectBasedOnOS(): void {
    if (userOs.name) {
      items.length ||
        osTypes.map((item) => {
          if (isObject(item.link)) {
            const linkBasedOnDevice = userOs.name === item.name ? item.link.onDevice : item.link.onOtherDevices;

            setItems((prev) => {
              return [
                ...prev,
                {
                  ...item,
                  link: linkBasedOnDevice,
                },
              ];
            });
          } else {
            setItems((prev) => [...prev, { ...item }]);
          }
        });
    }
  }

  useEffect(() => {
    const { userAgent } = window.navigator;

    const { name, link, badge } = osTypes.find((item) => {
      if (userAgent.search(item.name) !== -1) {
        return item;
      }
    })!;

    setUserOs({
      name,
      link: isObject(link) ? link.onDevice : link,
      badge,
    });
  }, []);

  useEffect(() => {
    setObjectBasedOnOS();
  }, [userOs.name]);

  return { userOs, allOsTypes: items };
}
