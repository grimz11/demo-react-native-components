import type { font } from '../default/font.theme';
import type { palette } from '../default/palette.theme';
import type { size } from '../default/size.theme';

export interface ITheme {
  palette: typeof palette;
  font: typeof font;
  size: typeof size;
}

export interface IThemeProvider {
  theme: ITheme;
  children: React.ReactNode;
}
