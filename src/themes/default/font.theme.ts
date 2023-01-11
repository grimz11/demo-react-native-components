import type {
  IFontWeightTheme,
  IFontTheme,
  IFontSizeTheme,
} from '../interfaces/font.theme.interface';

export const font: IFontTheme = {
  body: 'CircularStdBook',
  caption: 'CircularStdBook',
  button: 'CircularStdBook',
  label: 'CircularStdBook',
  title: 'CircularStdBook',
  subtitle: 'CircularStdBook',
  h1: 'CircularStdMedium',
  h2: 'CircularStdMedium',
  h3: 'CircularStdMedium',
  h4: 'CircularStdMedium',
  h5: 'CircularStdMedium',
  h6: 'CircularStdMedium',
};

export const fontWeight: IFontWeightTheme = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSize: IFontSizeTheme = {
  body: '12px',
  caption: '14px',
  button: '14px',
  label: '18px',
  title: '20px',
  subtitle: '16px',
  h6: '18px',
  h5: '24px',
  h4: '28px',
  h3: '36px',
  h2: '56px',
  h1: '112px',
};
