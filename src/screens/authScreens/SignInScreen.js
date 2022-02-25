import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors, Parameters, Title} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
export default function SignInScreen({navigation}) {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="Tài Khoản" type="arrow-left" navigation = {navigation} />
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={Title}>Đăng Nhập</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text1}>Vui lòng nhập email và mật khẩu</Text>
        <Text style={styles.text2}>đăng nhập với tài khoản của bạn</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" color={Colors.grey3} type="material"></Icon>
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focused(false);
            }}
            onBlur={() => {
              setTextInput2Focused(true);
            }}
          />
          <Animatable.View
            animation={textInput2Focused ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              style={{marginRight: 10}}
              name="visibility-off"
              color={Colors.grey3}
              type="material"></Icon>
          </Animatable.View>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          buttonStyle={Parameters.styleButton}
          title="Đăng nhập"
          titleStyle={Parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('DrawerNavigator');
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Quên mật khẩu ?
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hoặc</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 5}} >
        <SocialIcon
          type="facebook"
          button
          title="Đăng nhập với Facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          type="google"
          button
          title="Đăng nhập với Google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginTop:10, marginLeft:20}}>
        <Text style={{...styles.text1}}>Đồ ăn nhanh mới ?</Text>
      </View>
      <View style={{justifyContent:'flex-end', width:'50%', left:'46%',top:'6%'}}>
        <Button 
            title="Tạo tài khoản"
            buttonStyle = {Parameters.createBtn}
            titleStyle = {Parameters.createBtnTitle}
            onPress={() => {navigation.navigate('SignUpScreen')}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: Colors.grey3,
    fontSize: 16,
  },
  text2: {
    color: Colors.grey3,
    fontSize: 15,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 15,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  socialIcon: {
    height: 50,
    borderRadius: 12,  
  },
 
});
