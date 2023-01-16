import React from 'react';
import { Avatar as RNEAvatar, AvatarProps } from '@rneui/themed';

import { IColorTheme, IPaletteTheme, useTheme } from '../../themes';

export interface IAVatarProps extends AvatarProps {
  palette?: keyof IPaletteTheme;
  color?: keyof IColorTheme;

  [key: string]: any;
}

export const Avatar: React.FC<IAVatarProps> = ({
  palette = 'brand',
  color = 'primary',
  ...props
}) => {
  const theme = useTheme();
  const themeColors = theme.palette;
  const colorValue = themeColors[palette][color]!;

  return (
    <RNEAvatar
      {...props}
      containerStyle={[{ backgroundColor: colorValue }, props.containerStyle]}
    />
  );
};
