/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './src/navigators/MainTabNavigator';

const App: FC = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
