import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {Colors} from './src/global/styles'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar  barStyle='light-content' backgroundColor={Colors.statusbar}/>
       <Header title="Tài Khoản" type="arrow-left"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;
