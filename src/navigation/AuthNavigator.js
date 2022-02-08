import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInWellcomeScreen from '../screens/authScreens/SigInWellcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWellcomeScreen"
        component={SignInWellcomeScreen}
        options = {{
            headerShown : false,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options = {{
            headerShown : false,
        }}
      />
    </Auth.Navigator>
  );
}
