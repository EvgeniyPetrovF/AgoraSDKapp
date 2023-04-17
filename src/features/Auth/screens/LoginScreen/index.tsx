import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../../../models/navigation';
import LoginForm from '../../components/LoginForm';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'Login'>;

const LoginScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
