// import React from 'react';
import { Loadable } from 'demo-react-native-lib';
import { ButtonNavigator } from './button.navigator';
import type { IConfigNavigator } from './interfaces/config.navigator.interface';
// import Icon from 'react-native-vector-icons/Ionicons';

export const authNavigationList: IConfigNavigator[] = [
  {
    name: 'Button',
    component: Loadable(ButtonNavigator),
    shawInMenu: true,
    options: {
      tabBarLabel: 'Button',
      // tabBarIcon: ({ color }: any) => (
      //   <Icon name="home" color={color} size={20} />
      // ),
    },
  },
];
