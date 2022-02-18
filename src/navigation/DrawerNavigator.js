import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import RootClientTabs from './ClientTabs';
import {Colors} from '../global/styles';
import BusinessConsole from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="ClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              size={size}
              color={focussed ? '#7cc' : Colors.grey2}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="BusinessConsole"
        component={BusinessConsole}
        options={{
          title: 'Business console',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material"
              name="business"
              size={size}
              color={focussed ? '#7cc' : Colors.grey2}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
