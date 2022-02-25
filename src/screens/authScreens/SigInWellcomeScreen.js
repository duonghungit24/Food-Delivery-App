import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Parameters, Title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
export default function SignInWellcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 2.5,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: Colors.buttons, fontWeight: 'bold'}}>
          Khám phá mọi nhà hàng
        </Text>
        <Text style={{fontSize: 26, color: Colors.buttons, fontWeight: 'bold'}}>
          Khắp mọi nơi
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay autoplayTimeout={2}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdn.brvn.vn/news/480px/2019/18558_Thucannhanh.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdn.webcool.vn/cafedautu.vn//files/thutt.etoday/2021/09/17/hang-do-an-nhanh-120750.jpeg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://toplist.vn/images/800px/an-vat-t-dessert-440738.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://images.foody.vn/BlogsContents/foody-chan-ga-sa-tac-shop-online-ton-dan-874-636555978186666412.jpg',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end'}}>
        <View style={styles.button}>
          <Button
            TouchableComponent={TouchableOpacity}
            buttonStyle={Parameters.styleButton}
            title="Đăng nhập"
            titleStyle={Parameters.buttonTitle}
            onPress={() => {navigation.navigate('SignInScreen')}}
          />
        </View>
        <View style={styles.btnCreateAcc}>
          <Button
            TouchableComponent={TouchableOpacity}
            buttonStyle={{...Parameters.createBtn, height:50}}
            title="Tạo tài khoản"
            titleStyle={Parameters.createBtnTitle}
            onPress={() => {navigation.navigate("SignUpScreen")}}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  btnCreateAcc: {
    marginHorizontal: 20,
    marginBottom: 20,
  }
});
