import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWellcomeScreen from '../screens/authScreens/SigInWellcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import RootClientTabs from '../navigation/ClientTabs'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
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
        name="ClientTabs"
        component={RootClientTabs}
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
