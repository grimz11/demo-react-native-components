import * as React from 'react';
import { SafeAreaView } from '../SafeAreaView';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
