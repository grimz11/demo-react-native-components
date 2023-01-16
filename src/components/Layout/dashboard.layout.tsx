import * as React from 'react';
import { SafeAreaView } from '../SafeAreaView';

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
  children,
}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
