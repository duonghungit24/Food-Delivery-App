import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from './src/global/styles'
import RootStack from './src/navigation/RootNavigator';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar  barStyle='light-content' backgroundColor={Colors.statusbar}/>
      <RootStack />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;
