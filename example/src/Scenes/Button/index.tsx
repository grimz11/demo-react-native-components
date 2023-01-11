import * as React from 'react';

import {
  Button,
  SafeAreaView,
  Space,
  Text,
  Container,
} from 'demo-react-native-lib';

export const ButtonScene = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text variant="h3">Buttons</Text>
        <Space position="bottom" size="medium" />
        <Button palette="brand" color="primary" size="lg">
          Brand Primary
        </Button>
        <Space position="top" size="medium" />
        <Button palette="bg" color="primary" size="lg">
          BG primary
        </Button>
        <Space position="top" size="medium" />
        <Button palette="brand" color="secondary" size="lg" loading>
          Loading
        </Button>
        <Space position="top" size="medium" />
        <Button palette="bg" color="primary" size="lg" type="outline">
          Outline
        </Button>
        <Space position="top" size="medium" />
        <Button palette="bg" color="primary" size="lg" type="clear">
          Clear
        </Button>
      </Container>
    </SafeAreaView>
  );
};
