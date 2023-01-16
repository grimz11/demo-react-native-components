import styled from 'styled-components/native';
import * as React from 'react';
import { StatusBar } from 'react-native';

import { ITheme, useTheme } from '../../themes';

interface IProps {
  theme: ITheme;
}

const ContainerStyled = styled.View<IProps>`
  padding-right: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
  flex: 1;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.bg.primary};
  ${StatusBar.currentHeight && `height: ${StatusBar.currentHeight}px`}
`;

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <ContainerStyled theme={theme} {...props}>
      {children}
    </ContainerStyled>
  );
};
