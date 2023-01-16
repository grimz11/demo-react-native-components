import * as React from 'react';
import styled from 'styled-components/native';

import { ITheme, useTheme } from '../../themes';

const getColor = (theme: ITheme, type?: string) => {
  switch (type) {
    case 'error':
      return theme.palette.text.error;
    case 'success':
      return theme.palette.text.success;
    case 'warning':
      return theme.palette.text.warning;
    case 'disabled':
      return theme.palette.text.disabled;
    default:
      return theme.palette.text.primary;
  }
};

const defaultTextStyles = (theme: ITheme, type?: string) => `
  font-family: ${theme.font.body};
  font-weight: ${theme.fontWeight.regular};
  color: ${getColor(theme, type)};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const h1 = (theme: ITheme) => `
    font-family: ${theme.font.h1};
    font-size: ${theme.fontSize.h1};
`;

const h2 = (theme: ITheme) => `
    font-family: ${theme.font.h2};
    font-size: ${theme.fontSize.h2};
`;
const h3 = (theme: ITheme) => `
    font-family: ${theme.font.body};
    font-size: ${theme.fontSize.h3};
`;

const h4 = (theme: ITheme) => `
    font-family: ${theme.font.h4};
    font-size: ${theme.fontSize.h4};
`;

const h5 = (theme: ITheme) => `
    font-family: ${theme.font.h5};
    font-size: ${theme.fontSize.h5};
`;

const h6 = (theme: ITheme) => `
    font-family: ${theme.font.h6};
    font-size: ${theme.fontSize.h6};
    font-weight: ${theme.fontWeight.bold};
`;

const caption = (theme: ITheme) => `
    font-size: ${theme.fontSize.caption};
    font-family: ${theme.font.caption};
    font-weight: ${theme.fontWeight.medium};
`;

const hint = (theme: ITheme) => `
    font-size: ${theme.fontSize.body};
`;

const error = (theme: ITheme) => `
    color: ${theme.palette.text.error};
`;

const body = (theme: ITheme) => `
    font-size: ${theme.fontSize.body};
    font-family: ${theme.font.body};
    font-weight: ${theme.fontWeight.medium};
`;

const label = (theme: ITheme) => `
    font-family: ${theme.font.label};
    font-size: ${theme.fontSize.label};
    font-weight: ${theme.fontWeight.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  h6,
  h5,
  h3,
  h4,
  h2,
  h1,
};

interface IProps {
  theme?: ITheme;
  variant?: keyof typeof variants;
  type?: 'error' | 'success' | 'warning' | 'disabled' | 'default';
  children?: React.ReactNode;
  alignCenter?: boolean;
  onPress?: () => void;
  style?: any;
}

const Container = styled.Text<IProps>`
  ${({ theme, type }) => defaultTextStyles(theme, type)}
  ${({ variant, theme }) => variants[variant!](theme)}
  ${({ alignCenter }) => alignCenter && 'text-align: center;'}
`;

export const Text: React.FC<IProps> = ({ children, type, ...props }) => {
  const theme = useTheme();

  return (
    <Container theme={theme} type={type!} {...props}>
      {children}
    </Container>
  );
};

Text.defaultProps = {
  variant: 'body',
  type: 'default',
};
