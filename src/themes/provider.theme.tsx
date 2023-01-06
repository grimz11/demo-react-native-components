import React from 'react';
import { DefaultTheme } from './default';
import type { IThemeProvider, ITheme } from './interfaces/theme.interface';

export const ThemeContext = React.createContext<ITheme>(DefaultTheme);

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  theme,
}) => {
  const { font, palette, size } = theme;

  const currentFont = React.useMemo(() => {
    return {
      ...font,
    };
  }, [font]);

  const currentPalette = React.useMemo(() => {
    return {
      ...palette,
    };
  }, [palette]);

  const currentSize = React.useMemo(() => {
    return {
      ...size,
    };
  }, [size]);

  const currentTheme: ITheme = React.useMemo(() => {
    return {
      font: currentFont,
      palette: currentPalette,
      size: currentSize,
    };
  }, [currentFont, currentPalette, currentSize]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
