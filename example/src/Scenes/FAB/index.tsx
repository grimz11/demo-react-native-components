import * as React from 'react';

import { SafeAreaView, Text, Container, FAB } from 'demo-react-native-lib';

export const FABScene = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <SafeAreaView>
      <Container>
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Small Size
        </Text>
        <FAB
          loading
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          size="small"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Large Size
        </Text>
        <FAB
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          color="warning"
          palette="brand"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Primary Color
        </Text>
        <FAB
          visible={visible}
          title="Navigate"
          upperCase
          icon={{ name: 'place', color: 'white' }}
          palette="brand"
          color="secondary"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Disabled</Text>

        <FAB
          visible={visible}
          disabled
          title="Extended"
          icon={{
            name: 'place',
            color: 'white',
          }}
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{ name: 'delete', color: 'white' }}
          color="warning"
          palette="brand"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          title="Show"
          icon={{ name: 'edit', color: 'white' }}
          color="primary"
          palette="brand"
        />
      </Container>
    </SafeAreaView>
  );
};
