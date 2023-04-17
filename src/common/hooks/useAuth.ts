import {useMMKVBoolean} from 'react-native-mmkv';
import {StorageKeys} from '../../models/storage';

export function useAuth() {
  const [auth, setAuth] = useMMKVBoolean(StorageKeys.auth);

  const logout = () => {
    setAuth(false);
  };

  const signIn = () => {
    setAuth(true);
  };

  return {
    auth,
    logout,
    signIn,
  };
}
