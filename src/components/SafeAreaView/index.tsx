import { StatusBar, SafeAreaView as RNSafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView = styled(RNSafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
