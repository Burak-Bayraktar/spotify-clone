import { useEffect, useState } from 'react';
import { TDeviceTypes, TUserOsLinks } from 'types/WebSite/DownloadPage';
import { DEVICE_INFO } from 'constants/DownloadPage';

export function useUserOs() {
  const [userDeviceType, setUserDeviceType] = useState<TDeviceTypes | null>(null);
  const [deviceTypes, setDeviceTypes] = useState<TDeviceTypes[]>([]);

  function isObject(link: TUserOsLinks | string): link is TUserOsLinks {
    return (link as TUserOsLinks).onDevice !== undefined;
  }

  function setObjectBasedOnOS(): void {
    if (userDeviceType?.name) {
      deviceTypes.length ||
        DEVICE_INFO.map((item) => {
          if (isObject(item.link)) {
            const linkBasedOnDevice =
              userDeviceType.store === item.store ? item.link.onDevice : item.link.onOtherDevices;

            setDeviceTypes((prev) => {
              return [
                ...prev,
                {
                  ...item,
                  link: linkBasedOnDevice,
                },
              ];
            });
          } else {
            setDeviceTypes((prev) => [...prev, { ...item }]);
          }
        });
    }
  }

  useEffect(() => {
    const { userAgent } = window.navigator;

    const device = DEVICE_INFO.find((item) => {
      if (userAgent.search(item.name) !== -1) {
        return item;
      }
    })!;

    setUserDeviceType({
      name: device.name,
      link: isObject(device.link) ? device.link.onDevice : device.link,
      badge: device.badge,
      screenType: device.screenType,
      os: device.os,
      store: device.store,
    });
  }, []);

  useEffect(() => {
    setObjectBasedOnOS();
  }, [userDeviceType?.name]);

  return { userDeviceType, deviceTypes };
}
