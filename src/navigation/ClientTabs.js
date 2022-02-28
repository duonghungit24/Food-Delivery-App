import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import SearchScreen from '../screens/SearchScreen';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import {ClientStack} from './ClientStack';

const ClientTabs = createBottomTabNavigator();
export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'SearchScreen') {
            iconName = 'search';
          } else if (route.name === 'MyOrder') {
            iconName = 'view-list';
          } else {
            iconName = 'person';
          }
          return (
            <Icon type="material" name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.buttons,
        labelStyle: {marginBottom: 5},
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <ClientTabs.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{tabBarLabel: 'Search'}}
      />
      <ClientTabs.Screen
        name="MyOrder"
        component={MyOrderScreen}
        options={{tabBarLabel: 'My Order'}}
      />
      <ClientTabs.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{tabBarLabel: 'My Account'}}
      />
    </ClientTabs.Navigator>
  );
}
