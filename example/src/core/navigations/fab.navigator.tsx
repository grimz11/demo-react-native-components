import * as React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { FABScene } from '../../scenes/FAB';

export type FABNavigatorParamList = {
  FABScene: undefined;
  TypographyScene: undefined;
};

export type FABNavigationProp = StackNavigationProp<FABNavigatorParamList>;
export type FABNavigationProps = {
  navigation: FABNavigationProp;
};

const Stack = createStackNavigator<FABNavigatorParamList>();

export const FABNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FABScene"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="FABScene" component={FABScene} />
    </Stack.Navigator>
  );
};
