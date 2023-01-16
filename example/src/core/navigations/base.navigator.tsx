import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import { dashboardNavigationList } from './route-list.navigator';
import { ITheme, useTheme } from 'demo-react-native-lib';
import { AuthNavigator } from './auth.navigator';

const Tab: any = createBottomTabNavigator();

const Navigator = styled(Tab.Navigator).attrs<ITheme>(({ theme }) => ({
  screenOptions: {
    tabBarActiveTintColor: theme.palette.brand.primary,
    tabBarStyle: {
      backgroundColor: theme.palette.brand.background,
    },
    headerStyle: {
      backgroundColor: theme.palette.brand.primary,
    },
    headerTitleStyle: {
      fontFamily: theme.font.body,
      color: theme.palette.text.secondary,
    },
    headerShown: true,
  },
}))``;

export const BaseNavigation = () => {
  const isAuthenticated = true;
  const theme = useTheme();

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Navigator theme={theme}>
          {dashboardNavigationList.map(
            (option) =>
              option.shawInMenu && <Tab.Screen key={option.name} {...option} />
          )}
        </Navigator>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};
