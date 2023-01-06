import React from 'react';
import { ThemeContext } from '../provider.theme';

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
