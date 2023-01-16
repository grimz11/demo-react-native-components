import { Container, SafeAreaView, Space, Avatar } from 'demo-react-native-lib';
import React from 'react';

export const AvatarScene = () => {
  return (
    <SafeAreaView>
      <Container>
        <>
          <Avatar
            size="large"
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/women/57.jpg',
            }}
          />
          <Space position="top" size="medium" />
          <Avatar size="large" rounded title="Rd" />
          <Space position="top" size="medium" />
          <Avatar size="large" rounded title="X" />
          <Space position="top" size="medium" />
          <Avatar
            size="large"
            rounded
            icon={{ name: 'backup', type: 'material', color: '#cdde20' }}
          />
          <Space position="top" size="medium" />
          <Avatar
            title="RM"
            size="large"
            rounded
            palette="brand"
            color="secondary"
          />
          <Space position="top" size="medium" />
          <Avatar size="large" rounded />
          <Space position="top" size="medium" />
          <Avatar
            size="large"
            rounded
            icon={{ name: 'apartment', type: 'material', color: '#009688' }}
          />
          <Space position="top" size="medium" />
          <Avatar
            size="large"
            rounded
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
          />
          <Space position="top" size="medium" />
        </>
      </Container>
    </SafeAreaView>
  );
};
