import * as Yup from 'yup';

export const signinValidateSchema: any = Yup.object().shape({
  email: Yup.string().required('Email is required').email(),
  password: Yup.string().required('Password is required').min(7),
});
