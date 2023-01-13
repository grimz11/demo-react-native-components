import * as React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView, Container, ListItem } from 'demo-react-native-lib';
import type { ComponentNavigationProp } from 'example/src/core/navigations';

export const ComponentsScene = () => {
  const navigation = useNavigation<ComponentNavigationProp>();

  return (
    <SafeAreaView>
      <Container>
        <ListItem
          onPress={() => navigation.navigate('ButtonScene')}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>Buttons</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          onPress={() => navigation.navigate('TypographyScene')}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>Typography</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
          onPress={() => navigation.navigate('TypographyScene')}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>Form</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </Container>
    </SafeAreaView>
  );
};
