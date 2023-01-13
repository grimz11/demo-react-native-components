import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { authNavigationList } from './route-list.navigator';
import { ITheme, useTheme } from 'demo-react-native-lib';

const Tab: any = createBottomTabNavigator();

const Navigator = styled(Tab.Navigator).attrs<ITheme>(({ theme }) => ({
  screenOptions: {
    tabBarActiveTintColor: theme.palette.brand.primary,
    tabBarStyle: { backgroundColor: theme.palette.brand.background },
  },
}))``;

export const BaseNavigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator theme={theme}>
        {authNavigationList.map(
          (option) =>
            option.shawInMenu && <Tab.Screen key={option.name} {...option} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
