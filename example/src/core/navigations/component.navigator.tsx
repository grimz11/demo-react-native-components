import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ButtonScene } from '../../Scenes/Button';

export type ComponentNavigatorParamList = {
  ButtonScene: undefined;
};

export type ComponentNavigationProp =
  StackNavigationProp<ComponentNavigatorParamList>;
export type ComponentNavigationProps = {
  navigation: ComponentNavigationProp;
};

const Stack = createStackNavigator<ComponentNavigatorParamList>();

export const ComponentNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ButtonScene" component={ButtonScene} />
    </Stack.Navigator>
  );
};
