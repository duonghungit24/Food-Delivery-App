import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Colors} from './src/global/styles'
import RootStack from './src/navigation/RootNavigator';
import SplashStack from './src/navigation/SplashStack';
import FlashMessage from 'react-native-flash-message';
import { SignInContextProvider } from './src/contexts/authContext';
const App = () => {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar  barStyle='light-content' backgroundColor={Colors.statusbar}/>
        <SplashStack />
        <FlashMessage titleStyle={{ fontSize: 16, fontWeight: '700' }} position="top" />
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
