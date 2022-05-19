import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  ToastAndroid,
} from 'react-native';
import Header from '../../components/Header';
import {Formik} from 'formik';
import {Colors, Parameters} from '../../global/styles';
import {Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useUserContext } from '../../contexts/authContext';
import { utils} from '../../utils'

const initialValues = {
  phone_number: '',
  name: '',
  surname: '',
  password: '',
  email: '',
};

const SignUpScreen = ({navigation}) => {
  const [showPass, setShowPass] = useState(true);
  const { registerUser } = useUserContext();
   const  signUp = async(values) => {
    const {email, password, surname, name} = values;
    const useName = `${surname} ${name}`;
      if (email == '' || !email.trim() || password == '' || !password.trim()) {
        utils.showFlashMessage("Thông báo" , "Không được để trống thông tin" , "warning");
      }
      else if(!utils.validateEmail(email)){
        utils.showFlashMessage("Thông báo" ,"Vui lòng nhập đúng định dạng email", "warning")
      } 
      else {
        await registerUser(email, password, useName)
      }
  }
  return (
    <View style={styles.container}>
      <Header title="Tạo Tài Khoản" type="arrow-left" navigation={navigation} />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.view1}>
          <Text style={styles.text1}>Đăng kí</Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => signUp(values)}>
          {props => (
            <View style={styles.view2}>
              <View>
                <Text style={styles.text2}>Tạo tài khoản tại đây</Text>
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Số điện thoại"
                  style={styles.input1}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange('phone_number')}
                  value={props.values.phone_number}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Tên"
                  style={styles.input1}
                  autoFocus={true}
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Họ"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('surname')}
                  value={props.values.surname}
                />
              </View>
              <View style={styles.view10}>
                <View>
                  <Icon
                    name="email"
                    type="material"
                    style={styles.email}
                    color={Colors.grey3}
                  />
                </View>
                <View style={styles.view11}>
                  <TextInput
                    placeholder="Email"
                    style={styles.inputEmail}
                    autoFocus={false}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </View>
              </View>
              <View style={styles.view14}>
                <Animatable.View>
                  <Icon name="lock" type="material" color={Colors.grey3} />
                </Animatable.View>
                <TextInput
                  style={{flex: 1, marginLeft: 5}}
                  placeholder="Mật khẩu"
                  autoFocus={false}
                  onChangeText={props.handleChange('password')}
                  secureTextEntry={showPass}
                  value={props.values.password}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Icon
                    name={showPass ? 'visibility' : 'visibility-off'}
                    type="material"
                    color={Colors.grey3}
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.view15}>
                <Text style={styles.text3}>
                  Bằng cách tạo tài khoản hoặc đăng nhập với tài khoản
                </Text>
                <View style={styles.view16}>
                  <Text style={styles.text3}>Bạn đồng ý với </Text>
                  <Text style={styles.text4}> Điều khoản & Điều kiện</Text>
                  <Text style={styles.text3}> và </Text>
                </View>
                <Text style={styles.text4}> Quyền riêng tư bảo mật </Text>
              </View>
              <View style={styles.view17}>
                <Button
                  title="Tạo tài khoản"
                  buttonStyle={styles.button1}
                  titleStyle={styles.title1}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.view18}>
          <Text style={styles.text5}>Hoặc</Text>
        </View>
        <View style={styles.view19}>
          <View style={styles.view20}>
            <Text style={styles.text6}>Bạn đã tài khoản?</Text>
          </View>
          <View style={styles.view21}>
            <Button
              title="Đăng nhập"
              buttonStyle={styles.button2}
              titleStyle={styles.title2}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 20,
    color: Colors.buttons,
    fontWeight: 'bold',
  },
  view2: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  text2: {
    fontSize: 15,
    color: Colors.grey2,
  },
  view6: {
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 50,
  },
  input1: {
    fontSize: 16,
  },
  view10: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 50,
  },
  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
    marginRight: 5,
  },
  inputEmail: {
    fontSize: 16,
  },
  view11: {
    width: '95%',
  },
  view14: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 20,
  },
  view15: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text3: {
    fontSize: 14,
  },
  text4: {
    textDecorationLine: 'underline',
    color: 'green',
    fontSize: 13,
  },
  view16: {flexDirection: 'row'},
  button1: {
    backgroundColor: Colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  title1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  view17: {marginVertical: 10, marginTop: 30},
  view18: {
    alignItems: 'center',
  },
  text5: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  view20: {marginTop: 5},

  view21: {justifyContent: 'flex-end', width: '50%', left: '46%'},
  button2: {
    backgroundColor: Colors.background3,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.buttons,
    height: 40,
    paddingHorizontal: 20,
    // width:'100%'
  },
  title2: {
    color: Colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  text6: {
    justifyContent: 'flex-start',
    left: 20,
    fontSize: 16,
  },
});
