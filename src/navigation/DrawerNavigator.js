import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import RootClientTabs from './ClientTabs';
import {Colors} from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="ClientTabs"
                component={RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focussed, size}) => (
                        <Icon 
                            type='material-community'
                            name='home'
                            size={size}
                            color={ focussed ? '#7cc' : Colors.grey2}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}