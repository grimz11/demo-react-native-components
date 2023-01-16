import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { AvatarScene } from '../../scenes/Avatar';

export type AvatarNavigatorParamList = {
  AvatarScene: undefined;
};

export type AvatarNavigationProp =
  StackNavigationProp<AvatarNavigatorParamList>;
export type AvatarNavigationProps = {
  navigation: AvatarNavigationProp;
};

const Stack = createStackNavigator<AvatarNavigatorParamList>();

export const AvatarNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AvatarScene"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="AvatarScene" component={AvatarScene} />
    </Stack.Navigator>
  );
};
