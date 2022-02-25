import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import {Colors} from '../../global/styles';

 
const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
         <Header title="Tạo Tài Khoản" type="arrow-left" navigation = {navigation}/>
         <ScrollView>
        
         </ScrollView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})