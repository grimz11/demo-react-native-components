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
import { useNavigation } from '@react-navigation/native';
import type { AuthNavigationProp } from 'example/src/core/navigations/auth.navigator';

interface IFormValues {
  email: string;
  password: string;
}

export const SigninScene = () => {
  const defaultValues: IFormValues = {
    email: '',
    password: '',
  };

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(signinValidateSchema),
  });

  const navigation = useNavigation<AuthNavigationProp>();

  const onSubmit = (payload: IFormValues) => {
    console.log('payload', payload);
  };

  return (
    <SafeAreaView>
      <Container>
        <Text variant="h4" alignCenter>
          Login to your account
        </Text>
        <Space position="top" size="xxl">
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                placeholder="Email address"
                label="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage={errors.email && errors.email.message}
              />
            )}
            rules={{ required: true }}
          />
        </Space>
        <Space position="top" size="medium">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                placeholder="Password"
                label="Password"
                secureTextEntry={true}
                errorMessage={errors.password && errors.password.message}
              />
            )}
            rules={{ required: true }}
          />
        </Space>
        <Button
          palette="brand"
          color="primary"
          size="lg"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          Signin
        </Button>
        <Space position="top" size="xl">
          <Text
            variant="body"
            onPress={() => navigation.navigate('SigninScene')}
          >
            Don't have an account? Sign up
          </Text>
        </Space>
      </Container>
    </SafeAreaView>
  );
};
