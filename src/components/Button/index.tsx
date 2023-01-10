import React from 'react';
import { Button as RNEButton, ButtonProps } from '@rneui/themed';

import { IColorTheme, IPaletteTheme, useTheme } from '../../themes';

export interface IButtonProps extends ButtonProps {
  palette?: keyof IPaletteTheme;
  color?: keyof IColorTheme;
  [key: string]: any;
}

export const Button: React.FC<IButtonProps> = ({
  palette = 'brand',
  color = 'primary',
  ...props
}) => {
  const theme = useTheme();
  const themeColors = theme.palette;
  const colorValue = themeColors[palette][color];

  return (
    <RNEButton
      {...props}
      buttonStyle={[{ backgroundColor: colorValue }, props.buttonStyle]}
    />
  );
};
