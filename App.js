import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from './src/global/styles'
import SignInScreen from './src/screens/authScreens/SignInScreen';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar  barStyle='light-content' backgroundColor={Colors.statusbar}/>
     <SignInScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;
