export interface IPaletteTheme {
  brand: IColorTheme;
  bg: IColorTheme;
  text: IColorTheme;
  border: IColorTheme;
}

export interface IColorTheme {
  primary?: string;
  secondary?: string;
  background?: string;
  warning?: string;
  error?: string;
  success?: string;
  disabled?: string;
}
