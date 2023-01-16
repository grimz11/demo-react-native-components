import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ButtonScene } from '../../scenes/Button';

export type ButtonNavigatorParamList = {
  ButtonScene: undefined;
};

export type ButtonNavigationProp =
  StackNavigationProp<ButtonNavigatorParamList>;
export type ButtonNavigationProps = {
  navigation: ButtonNavigationProp;
};

const Stack = createStackNavigator<ButtonNavigatorParamList>();

export const ButtonNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ButtonScene"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="ButtonScene" component={ButtonScene} />
    </Stack.Navigator>
  );
};
