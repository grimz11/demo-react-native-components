import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { TypographyScene } from '../../scenes/Typography';

export type TypographyNavigatorParamList = {
  TypographyScene: undefined;
};

export type TypographyNavigationProp =
  StackNavigationProp<TypographyNavigatorParamList>;
export type TypographyNavigationProps = {
  navigation: TypographyNavigationProp;
};

const Stack = createStackNavigator<TypographyNavigatorParamList>();

export const TypographyNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TypographyScene"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="TypographyScene" component={TypographyScene} />
    </Stack.Navigator>
  );
};
