import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {Formik} from 'formik';
import {utils} from '../../utils';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
const initialValues = {
  email: '',
};

const ForgotPassword = ({navigation}) => {
  const handleForgotPassword = async ({email}) => {
    try {
      await auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent successfully');
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      if (error) {
        utils.showFlashMessage('Thông báo', 'Không thành công', 'warning');
      }
    }
  };
  return (
    <View>
      <Header type="arrow-left" title="Quên mật khẩu" navigation={navigation} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleForgotPassword(values)}>
        {props => (
          <View style={styles.view6}>
            <TextInput
              placeholder="Nhập Email"
              style={styles.input1}
              autoFocus={true}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <Button title="Gửi đi" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
