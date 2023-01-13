import * as React from 'react';

import { SafeAreaView, Space, Text, Container } from 'demo-react-native-lib';

export const TypographyScene = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text variant="h2">I am H2</Text>
        <Space position="bottom" size="medium" />
        <Text variant="h3">I am H3</Text>
        <Space position="bottom" size="medium" />
        <Text variant="h4">I am H4</Text>
        <Space position="bottom" size="medium" />
        <Text variant="h5">I am H5</Text>
        <Space position="bottom" size="medium" />
        <Text variant="h6">I am H6</Text>
        <Space position="bottom" size="medium" />
        <Text variant="body">I am body</Text>
        <Space position="bottom" size="medium" />
        <Space position="bottom" size="medium" />
        <Text variant="h2" type="success">
          Success
        </Text>
        <Space position="bottom" size="medium" />
        <Text variant="h2" type="error">
          Error
        </Text>
        <Space position="bottom" size="medium" />
        <Text variant="h2" type="disabled">
          Disabled
        </Text>
        <Space position="bottom" size="medium" />
      </Container>
    </SafeAreaView>
  );
};
