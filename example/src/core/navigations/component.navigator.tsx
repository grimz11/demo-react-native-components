import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ButtonScene } from '../../Scenes/Button';
import { ComponentsScene } from '../../Scenes/Components';
import { TypographyScene } from 'example/src/Scenes/Typography';

export type ComponentNavigatorParamList = {
  ButtonScene: undefined;
  ComponentsScene: undefined;
  TypographyScene: undefined;
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
      initialRouteName="ComponentsScene"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="ComponentsScene" component={ComponentsScene} />
      <Stack.Screen name="ButtonScene" component={ButtonScene} />
      <Stack.Screen name="TypographyScene" component={TypographyScene} />
    </Stack.Navigator>
  );
};
