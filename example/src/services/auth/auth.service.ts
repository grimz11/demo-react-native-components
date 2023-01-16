import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  //create mock login
  public async login(username: string, password: string): Promise<any> {
    if (username === 'test' && password === 'test') {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({ username, password })
      );

      return await AsyncStorage.getItem('user');
    } else {
      throw new Error('Invalid username or password');
    }
  }
}

export const authService = new AuthService();
