import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm, Controller } from 'react-hook-form';

import {
  Button,
  SafeAreaView,
  Space,
  Text,
  Container,
  Input,
} from 'demo-react-native-lib';
import { signinValidateSchema } from 'example/src/core/validations';

interface IFormValues {
  email: string;
  password: string;
}

export const HomeScene = () => {
  const defaultValues: IFormValues = {
    email: '',
    password: '',
  };

  const { control } = useForm({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(signinValidateSchema),
  });

  return (
    <SafeAreaView>
      <Container>
        <Text variant="h3">Signin</Text>
        <Space position="top" size="xxl">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Email address"
                label="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
            rules={{ required: true }}
          />
        </Space>
        <Space position="top" size="small">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Password"
                label="Password"
                secureTextEntry={true}
              />
            )}
            rules={{ required: true }}
          />
        </Space>
        <Button palette="brand" color="primary" size="lg">
          Signin
        </Button>
      </Container>
    </SafeAreaView>
  );
};
