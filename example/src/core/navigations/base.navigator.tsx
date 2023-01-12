import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { authNavigationList } from './route-list.navigator';

const Tab: any = createBottomTabNavigator();

const Navigator = styled(Tab.Navigator).attrs({
  initialRouteName: 'Button',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
})``;

export const BaseNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        {authNavigationList.map(
          (option) =>
            option.shawInMenu && <Tab.Screen key={option.name} {...option} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
