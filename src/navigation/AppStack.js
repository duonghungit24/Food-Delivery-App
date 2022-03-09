import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';

const App = createStackNavigator();
export default function AppStack() {
  return (
    <App.Navigator>
      <App.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
}
