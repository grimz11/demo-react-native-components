import React from 'react';
import type { ITabItem } from './interfaces/tab-item.interface';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Loadable } from 'demo-react-native-lib';
import { ButtonNavigator } from './button.navigator';
import { TypographyNavigator } from './typography.navigator';
import { FABNavigator } from './fab.navigator';
import { AvatarNavigator } from './avatar.navigator';

export const dashboardNavigationList: ITabItem[] = [
  {
    name: 'Buttons',
    component: Loadable(ButtonNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Button',
      tabBarIcon: ({ color }) => (
        <Icon name="home" size={25} color={color} solid={false} />
      ),
    },
  },
  {
    name: 'FAB',
    component: Loadable(FABNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'FAB',
      tabBarIcon: ({ color }) => (
        <Icon name="box" size={25} color={color} solid={false} />
      ),
    },
  },
  {
    name: 'Avatar',
    component: Loadable(AvatarNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Avatar',
      tabBarIcon: ({ color }) => (
        <Icon name="box" size={25} color={color} solid={false} />
      ),
    },
  },
  {
    name: 'Typography',
    component: Loadable(TypographyNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Typography',
      tabBarIcon: ({ color }) => (
        <Icon name="box" size={25} color={color} solid={false} />
      ),
    },
  },
];
