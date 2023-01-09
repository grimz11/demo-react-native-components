import React from 'react';
import { DefaultTheme } from './default';
import type { IThemeProvider, ITheme } from './interfaces/theme.interface';

export const ThemeContext = React.createContext<ITheme>(DefaultTheme);

export const ThemeProvider: React.FC<IThemeProvider> = ({
  children,
  theme,
}) => {
  const { font, fontWeight, fontSize, palette, size, space } = theme;

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

  const currentSpace = React.useMemo(() => {
    return {
      ...space,
    };
  }, [space]);

  const currentFontWeight = React.useMemo(() => {
    return {
      ...fontWeight,
    };
  }, [fontWeight]);

  const currentFontSize = React.useMemo(() => {
    return {
      ...fontSize,
    };
  }, [fontSize]);

  const currentTheme: ITheme = React.useMemo(() => {
    return {
      font: currentFont,
      palette: currentPalette,
      size: currentSize,
      space: currentSpace,
      fontWeight: currentFontWeight,
      fontSize: currentFontSize,
    };
  }, [
    currentFont,
    currentPalette,
    currentSize,
    currentSpace,
    currentFontWeight,
    currentFontSize,
  ]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
