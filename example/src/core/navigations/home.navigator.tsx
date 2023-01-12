import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { HomeScene } from '../../Scenes/Home';

export type HomeNavigatorParamList = {
  HomeScene: undefined;
};

export type HomeNavigationProp = StackNavigationProp<HomeNavigatorParamList>;
export type HomeNavigationProps = {
  navigation: HomeNavigationProp;
};

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScene" component={HomeScene} />
    </Stack.Navigator>
  );
};
