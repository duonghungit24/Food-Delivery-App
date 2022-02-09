import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Parameters, Title} from '../global/styles';
import {Icon , withBadge } from 'react-native-elements';

const BadgeIcon = withBadge(0)(Icon);

export default function HomeHeader() {
    return(
        <View style={styles.container}>
            <View style={{marginLeft:10}}>
                <Icon 
                    type="material-community"
                    name = "menu"
                    size={35}
                    color={Colors.cardbackground}
                />
            </View>
            <View>
                <Text style={styles.headerTitle}>App Food</Text>
            </View>
            <View style={{marginRight:10}}>
                <BadgeIcon 
                    type="material-community"
                    name="cart"
                    size={35}
                    color={Colors.cardbackground}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:Colors.buttons,
        height:Parameters.headerHeight,
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
     headerTitle: {
         color: Colors.cardbackground,
         fontSize:25,
         fontWeight: 'bold',
     }
})