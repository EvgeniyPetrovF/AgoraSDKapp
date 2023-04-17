import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrencyGraphScreen from '../../features/Currency/screens/CurrencyGraphScreen';
import SettingsScreen from '../../features/Settings/screens/SettingsScreen';
import VideoRoomsScreen from '../../features/Video/screens/VideoRoomsScreen';
import {TabNavigatorParamList} from '../../models/navigation';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const options = {
  videoRoomsScreen: {headerShown: false, tabBarLabel: 'Home'},
  currencyChart: {headerTitle: 'Currency Chart', tabBarLabel: 'Currency Chart'},
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="VideoRoomsScreen"
        component={VideoRoomsScreen}
        options={options.videoRoomsScreen}
      />
      <Tab.Screen
        name="CurrencyChart"
        component={CurrencyGraphScreen}
        options={options.currencyChart}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
