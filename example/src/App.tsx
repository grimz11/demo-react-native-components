import * as React from 'react';
import * as Font from 'expo-font';

import { ScrollView } from 'react-native';
import {
  Button,
  DefaultTheme,
  Space,
  ThemeProvider,
  useTheme,
} from 'demo-react-native-lib';
import styled from 'styled-components/native';

export default function App() {
  const [isFontLoaded] = Font.useFonts({
    CircularStdBlack: require('../assets/fonts/CircularStd-Black.ttf'),
    CircularStdBold: require('../assets/fonts/CircularStd-Bold.ttf'),
    CircularStdBook: require('../assets/fonts/CircularStd-Book.ttf'),
    CircularStdMedium: require('../assets/fonts/CircularStd-Medium.ttf'),
  });

  const theme = useTheme();
  const Container = styled.View`
    flex: 1;
    margin-top: ${theme.space[5]};
    padding: ${theme.space[3]};
  `;

  if (!isFontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ScrollView>
        <Container>
          {/* <Text variant="h5">Buttons</Text> */}
          <Button variant="primary">Primary</Button>
          <Space />
          <Button variant="secondary" type="outline">
            Secondary
          </Button>
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}
