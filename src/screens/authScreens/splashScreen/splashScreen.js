import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('RootStack');
    }, 2800);
  });
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <LottieView
        source={require('../../../assets/77322-food.json')}
        style={{width: '90%', aspectRatio: 1, marginTop: 50}}
        autoPlay
        loop
        // duration={2000}
      />
      <LottieView
        source={require('../../../assets/72651-food-text-animation.json')}
        style={{width: '90%', aspectRatio: 1, marginTop: 50}}
        autoPlay
        loop
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
