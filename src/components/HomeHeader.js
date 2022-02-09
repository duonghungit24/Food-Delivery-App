import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Parameters, Title} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function HomeHeader() {
    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', marginLeft:10}}>
                <Icon 
                    type="material-community"
                    name = "menu"
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
    }
})