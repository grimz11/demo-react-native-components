import { Input as RNEInput } from '@rneui/themed';
import styled from 'styled-components/native';

export const Input = styled(RNEInput).attrs({
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontSize: 16,
  },
})`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  height: 50px;
`;
