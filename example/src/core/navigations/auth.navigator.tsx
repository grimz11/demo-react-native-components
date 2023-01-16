import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { SigninScene, SignupScene } from '../../scenes/Auth/index';

export type AuthNavigatorParamList = {
  SigninScene: undefined;
  SignupScene: undefined;
};

export type AuthNavigationProp = StackNavigationProp<AuthNavigatorParamList>;
export type AuthNavigationProps = {
  navigation: AuthNavigationProp;
};

const Stack = createStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SigninScene"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SigninScene" component={SigninScene} />
      <Stack.Screen name="SignupScene" component={SignupScene} />
    </Stack.Navigator>
  );
};
