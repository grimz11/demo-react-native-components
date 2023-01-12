import * as React from 'react';

import {
  Button,
  SafeAreaView,
  Space,
  Text,
  Container,
} from 'demo-react-native-lib';

export const HomeScene = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text variant="h3">Signin</Text>
        <Space position="bottom" size="medium" />
        <Button palette="brand" color="primary" size="lg">
          Signin
        </Button>
      </Container>
    </SafeAreaView>
  );
};
