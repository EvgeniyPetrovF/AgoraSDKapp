import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {useAuth} from '../../common/hooks/useAuth';
import LoginScreen from '../../features/Auth/screens/LoginScreen';
import {StackParamList} from '../../models/navigation';
import MainTabNavigator from '../MainTabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  home: {headerTitle: 'Home'},
  auth: {headerShown: false},
};

const AppStack = () => {
  const {auth} = useAuth();

  return (
    <Stack.Navigator initialRouteName="Login">
      {auth ? (
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={options.home}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={options.auth}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
