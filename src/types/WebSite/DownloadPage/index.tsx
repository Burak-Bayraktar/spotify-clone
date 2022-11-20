import { ReactElement } from 'react';

// enums
export enum OSNames {
  Windows = 'Windows',
  Android = 'Android',
  iPhone = 'iPhone',
}

export enum ScreenTypes {
  Desktop = 'Desktop',
  Mobile = 'Mobile',
  Tablet = 'Tablet',
}

//types
export type UserOsLinks = { onDevice: string; onOtherDevices: string };

export type OSTypes = {
  name: OSNames;
  link: UserOsLinks | string;
  badge: ReactElement;
  screenType: ScreenTypes;
};

export type AvailableDevices = {
  title: string;
  link: string;
  hasLink: boolean;
};
