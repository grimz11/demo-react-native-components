import * as React from 'react';
import { Container } from '../Container';
import { SafeAreaView } from '../SafeAreaView';

interface IAuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <Container>{children}</Container>
    </SafeAreaView>
  );
};
