export interface IPaletteTheme {
  brand: IBrandTheme;
  ui: IUiTheme;
  bg: IBgTheme;
  text: ITextTheme;
  border: IBorderTheme;
}

interface IBorderTheme {
  primary: string;
}

interface IBrandTheme {
  primary: string;
  secondary: string;
  muted: string;
}

interface IUiTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  disabled: string;
  error: string;
  success: string;
}

interface IBgTheme {
  primary: string;
  secondary: string;
  surface: string;
}

interface ITextTheme {
  default: string;
  muted: string;
  primary: string;
  secondary: string;
  inverse: string;
  error: string;
  success: string;
}
