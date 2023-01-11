import React from 'react';
import { Button as RNEButton, ButtonProps } from '@rneui/themed';

import { IColorTheme, IPaletteTheme, useTheme } from '../../themes';

export interface IButtonProps extends ButtonProps {
  palette?: keyof IPaletteTheme;
  color?: keyof IColorTheme;
  [key: string]: any;
}

const getColorValueByType = (colorValue: string, type?: string) => {
  switch (type) {
    case 'outline':
    case 'clear':
      return 'transparent';
    default:
      return colorValue;
  }
};

export const Button: React.FC<IButtonProps> = ({
  palette = 'brand',
  color = 'primary',
  ...props
}) => {
  const theme = useTheme();
  const themeColors = theme.palette;
  const colorValue = getColorValueByType(
    themeColors[palette][color]!,
    props.type
  );

  return (
    <RNEButton
      {...props}
      buttonStyle={[{ backgroundColor: colorValue }, props.buttonStyle]}
    />
  );
};
