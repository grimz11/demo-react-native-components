import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Button as RNEButton } from '@rneui/themed';
import { ITheme, useTheme } from '../../themes';

interface IProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  buttonStyles?: object;
}

const getButtonStyles = (variant: IProps['variant'], theme: ITheme) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.palette.brand.primary,
        color: theme.palette.text.default,
      };
    case 'secondary':
      return {
        backgroundColor: theme.palette.brand.secondary,
        color: theme.palette.text.primary,
      };
    default:
      return {
        backgroundColor: theme.palette.brand.primary,
        color: theme.palette.text.default,
      };
  }
};

const Container = styled(RNEButton).attrs<IProps>(({ buttonStyles }) => ({
  buttonStyle: { ...buttonStyles, borderRadius: 8 },
  titleStyle: { ...buttonStyles, fontSize: 24 },
}))<IProps>``;

export const Button: React.FC<IProps> = ({ children, variant, ...props }) => {
  const theme = useTheme();
  const variantStyles = getButtonStyles(variant, theme);

  return (
    <Container variant={variant} buttonStyles={variantStyles} {...props}>
      {children}
    </Container>
  );
};

Button.defaultProps = {
  variant: 'primary',
};
