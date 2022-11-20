import { ReactElement } from 'react';

// enums
export enum EDeviceTypes {
  Windows = 'Windows',
  Android = 'Android',
  iPhone = 'iPhone',
  iPad = 'iPad',
}

export enum EOSTypes {
  iOS = 'iOS',
  ipadOS = 'ipadOS',
  macOS = 'macOS',
  Android = 'Android',
  Windows = 'Windows',
}

export enum EOSStore {
  AppStore = 'AppStore',
  PlayStore = 'PlayStore',
  MicrosoftStore = 'MicrosoftStore',
}

export enum EScreenTypes {
  Desktop = 'Desktop',
  Mobile = 'Mobile',
  Tablet = 'Tablet',
}

//types
export type TUserOsLinks = { onDevice: string; onOtherDevices: string };

export type TDeviceTypes = {
  name: EDeviceTypes;
  os: EOSTypes;
  store: EOSStore;
  link: TUserOsLinks | string;
  badge: ReactElement;
  screenType: EScreenTypes;
};

export type TAvailableDevices = {
  title: string;
  link: string;
  hasLink: boolean;
};
