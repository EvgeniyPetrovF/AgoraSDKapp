import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrencyGraphScreen from '../../features/Currency/screens/CurrencyGraphScreen';
import VideoRoomsScreen from '../../features/Video/screens/VideoRoomsScreen';

const Tab = createBottomTabNavigator();

const options = {
  homeStackNavigator: {headerShown: false, tabBarLabel: 'Home'},
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Agora"
        component={VideoRoomsScreen}
        options={options.homeStackNavigator}
      />
      <Tab.Screen name="CurrencyChart" component={CurrencyGraphScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
