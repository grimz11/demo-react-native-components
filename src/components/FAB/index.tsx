import React from 'react';
import { FAB as RNEFab, FABProps } from '@rneui/themed';

import { IColorTheme, IPaletteTheme, useTheme } from '../../themes';

export interface IFABProps extends FABProps {
  palette?: keyof IPaletteTheme;
  color?: keyof IColorTheme;

  [key: string]: any;
}

export const FAB: React.FC<IFABProps> = ({
  palette = 'brand',
  color = 'primary',
  ...props
}) => {
  const theme = useTheme();
  const themeColors = theme.palette;
  const colorValue = themeColors[palette][color]!;

  return <RNEFab {...props} color={colorValue} />;
};
