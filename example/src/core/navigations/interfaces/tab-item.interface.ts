import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export interface ITabItem {
  name: string;
  component: React.ComponentType;
  shawInMenu: boolean;
  options?: BottomTabNavigationOptions;
}
