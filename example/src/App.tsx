import * as React from 'react';
import * as Font from 'expo-font';

import { ScrollView } from 'react-native';
import { Container, DefaultTheme, ThemeProvider } from 'demo-react-native-lib';
import { ButtonScene } from './Scenes/Button';

export default function App() {
  const [isFontLoaded] = Font.useFonts({
    CircularStdBlack: require('../assets/fonts/CircularStd-Black.ttf'),
    CircularStdBold: require('../assets/fonts/CircularStd-Bold.ttf'),
    CircularStdBook: require('../assets/fonts/CircularStd-Book.ttf'),
    CircularStdMedium: require('../assets/fonts/CircularStd-Medium.ttf'),
  });

  if (!isFontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ScrollView>
        <Container>
          <ButtonScene />
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}
