import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';

const ForgotPassword = ({navigation}) => {
  return (
    <View>
      <Header type="arrow-left" title="Quên mật khẩu" navigation={navigation} />
      <Text>ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
