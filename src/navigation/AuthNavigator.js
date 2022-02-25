import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWellcomeScreen from '../screens/authScreens/SigInWellcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
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
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
       <Auth.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options = {{
            headerShown : false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
    </Auth.Navigator>
  );
}
