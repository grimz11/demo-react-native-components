import * as React from 'react';

import { Button, SafeAreaView, Space, Container } from 'demo-react-native-lib';

export const ButtonScene = () => {
  return (
    <SafeAreaView>
      <Container>
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
        <Button
          palette="brand"
          color="success"
          size="lg"
          icon={{
            name: 'save',
            type: 'font-awesome',
            size: 25,
            color: 'white',
          }}
        >
          Icon left
        </Button>
        <Space position="top" size="medium" />
        <Button
          palette="brand"
          color="error"
          size="lg"
          iconRight={true}
          icon={{
            name: 'close',
            type: 'font-awesome',
            size: 25,
            color: 'white',
          }}
        >
          Icon right
        </Button>
        <Space position="top" size="medium" />
        <Button palette="brand" color="warning" size="lg" uppercase>
          UPPERCASE
        </Button>
        <Space position="top" size="medium" />
        <Button palette="bg" color="primary" size="lg" type="outline" raised>
          Raised
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
