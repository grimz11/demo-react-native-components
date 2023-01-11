import styled from 'styled-components/native';
import * as React from 'react';

import { ITheme, useTheme } from '../../themes';

interface IProps {
  theme: ITheme;
}

const ContainerStyled = styled.View<IProps>`
  margin-top: ${(props) => props.theme.space[5]};
  margin-bottom: ${(props) => props.theme.space[5]};
  padding: ${(props) => props.theme.space[3]};
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
