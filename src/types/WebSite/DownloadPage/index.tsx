import { ReactElement } from 'react';

export type UserOsLinks = { onDevice: string; onOtherDevices: string };

export type OSTypes = {
  name: string;
  link: UserOsLinks | string;
  badge: ReactElement;
};

export enum OSNames {
  Windows = 'Windows',
  Android = 'Android',
  iPhone = 'iPhone',
}

export type AvailableDevices = {
  title: string;
  link: string;
  hasLink: boolean;
};
