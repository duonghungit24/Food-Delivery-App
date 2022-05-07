import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWellcomeScreen from '../screens/authScreens/SigInWellcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import SplashScreen from '../screens/authScreens/splashScreen/splashScreen';
const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SplashScreen"
        component={SplashScreen}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Auth.Screen
        name="SignInWellcomeScreen"
        component={SignInWellcomeScreen}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
    </Auth.Navigator>
  );
}
