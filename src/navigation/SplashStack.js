import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/authScreens/splashScreen/splashScreen';
import RootStack from './RootNavigator';
const Splash = createStackNavigator();
export default function SplashStack() {
  return (
    <NavigationContainer>
      <Splash.Navigator>
        <Splash.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
        <Splash.Screen
          name="RootStack"
          component={RootStack}
          options={{
            headerShown: false,
            ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
      </Splash.Navigator>
    </NavigationContainer>
  );
}
