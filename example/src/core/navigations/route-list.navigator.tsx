import React from 'react';
import { ComponentNavigator } from './component.navigator';
import type { ITabItem } from './interfaces/tab-item.interface';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Loadable } from 'demo-react-native-lib';
import { HomeNavigator } from './home.navigator';

export const authNavigationList: ITabItem[] = [
  {
    name: 'Home',
    component: Loadable(HomeNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <Icon name="home" size={25} color={color} solid={false} />
      ),
    },
  },
  {
    name: 'Components',
    component: Loadable(ComponentNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Components',
      tabBarIcon: ({ color }) => (
        <Icon name="box" size={25} color={color} solid={false} />
      ),
    },
  },
];
