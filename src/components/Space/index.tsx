import React from 'react';
import styled from 'styled-components/native';
import { ITheme, useTheme } from '../../themes';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

interface IVariant {
  position?: keyof typeof positionVariant;
  size?: keyof typeof sizeVariant;
  theme?: ITheme;
  children?: React.ReactNode;
  variant?: string;
}

const getVariant = ({ position, size, theme }: IVariant) => {
  const sizeIndex = size ? sizeVariant[size] : sizeVariant.small;
  const property = position ? positionVariant[position] : positionVariant.top;
  const value = theme?.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView: any = styled.View`
  ${({ variant }: IVariant) => variant};
`;

export const Space: React.FC<IVariant> = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant({ position, size, theme });

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Space.defaultProps = {
  position: 'top',
  size: 'small',
};
