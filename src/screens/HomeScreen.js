import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <HomeHeader />
            <Text>HomeScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})