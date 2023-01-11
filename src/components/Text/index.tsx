import * as React from 'react';
import styled from 'styled-components/native';

import { ITheme, useTheme } from '../../themes';

const defaultTextStyles = (theme: ITheme) => `
  font-family: ${theme.font.body};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.palette.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const h1 = (theme: ITheme) => `
    font-family: ${theme.font.h1};
    font-size: ${theme.fontSize.h1};
    color: ${theme.palette.text.primary};
`;

const h2 = (theme: ITheme) => `
    font-family: ${theme.font.h2};
    font-size: ${theme.fontSize.h2};
    color: ${theme.palette.text.primary};
`;
const h3 = (theme: ITheme) => `
    font-family: ${theme.font.h3};
    font-size: ${theme.fontSize.h3};
    color: ${theme.palette.text.primary};
`;

const h4 = (theme: ITheme) => `
    font-family: ${theme.font.h4};
    font-size: ${theme.fontSize.h4};
    color: ${theme.palette.text.primary};
`;

const h5 = (theme: ITheme) => `
    font-family: ${theme.font.h5};
    font-size: ${theme.fontSize.h5};
    color: ${theme.palette.text.primary};
`;

const h6 = (theme: ITheme) => `
    font-family: ${theme.font.h6};
    font-size: ${theme.fontSize.h6};
    color: ${theme.palette.text.primary};
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
  children?: React.ReactNode;
}

const Container = styled.Text<IProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant!](theme)}
`;

export const Text: React.FC<IProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Container theme={theme} {...props}>
      {children}
    </Container>
  );
};

Text.defaultProps = {
  variant: 'body',
};
