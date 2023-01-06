import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  Button,
  DefaultTheme,
  multiply,
  ThemeProvider,
} from 'demo-react-native-lib';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const newTheme: typeof DefaultTheme = {
    ...DefaultTheme,
    palette: {
      ...DefaultTheme.palette,
      brand: {
        ...DefaultTheme.palette.brand,
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    },
  };

  return (
    <ThemeProvider theme={newTheme}>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <Button variant="primary">Primary</Button>
        {/* <Space /> */}
        <Button variant="secondary">Secondary</Button>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
