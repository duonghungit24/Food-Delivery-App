import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from './src/global/styles'
import RootStack from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/contexts/authContext';
const App = () => {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar  barStyle='light-content' backgroundColor={Colors.statusbar}/>
        <RootStack />
      </View>
    </SignInContextProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;
