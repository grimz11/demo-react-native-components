import type { font, fontSize, fontWeight } from '../default/font.theme';
import type { palette } from '../default/palette.theme';
import type { size } from '../default/size.theme';
import type { space } from '../default/space.theme';

export interface ITheme {
  palette: typeof palette;
  font: typeof font;
  fontWeight: typeof fontWeight;
  fontSize: typeof fontSize;
  size: typeof size;
  space: typeof space;
}

export interface IThemeProvider {
  theme: ITheme;
  children: React.ReactNode;
}
