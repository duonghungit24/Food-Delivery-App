import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import {useUserContext} from '../contexts/authContext';
import {utils} from '../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {result} from 'lodash';

export default function MyAccountScreen({navigation}) {
  const {logoutUser, user, updateUserInfor, getInforUser} = useUserContext();
  const openLibrary = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      includeBase64: true,
      presentationStyle: 'fullScreen',
    });
    console.log(result.assets[0].uri);
    updateUserInfor({name: 'Khánh Bầu trời', url: result.assets[0].uri})
      .then(result => console.log('result', result))
      .catch(err => console.log(err));
  };
  console.log(getInforUser());
  const logOut = () => {
    if (user) {
      utils.showAlertConfirm(
        'Thông báo',
        'Bạn có muốn đăng xuất ?',
        logoutUser,
      );
    }
  };
  const updateInfor = async () => {
    const values = {name: 'Khánh Sky', url: ''};
    updateUserInfor(values)
      .then(result => console.log('result', result))
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Tài khoản" type="arrow-left" navigation={navigation} />
      <View style={styles.view1}>
        {/* avatar */}
        <View style={styles.avt}>
          <TouchableOpacity
            onPress={openLibrary}
            style={{
              width: 85,
              height: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.grey1 + '20',
              borderRadius: 50,
            }}>
            <Image
              source={{uri: getInforUser().url}}
              style={{height: 50, width: 50}}
            />
            <Icon
              name="folder-multiple-image"
              type="material-community"
              color={Colors.grey1}
              size={30}
            />
          </TouchableOpacity>
        </View>

        {/* Name */}
        <Text style={{fontSize: 17, color: Colors.grey1, fontWeight: '700'}}>
          {getInforUser().name}
        </Text>
        <TouchableOpacity onPress={updateInfor}>
          <Text style={{fontSize: 17, color: Colors.tetxGreen}}>
            Chỉnh sửa tài khoản
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view2}>
        <Text style={[styles.title_text, {marginBottom: 10}]}>
          Địa điểm đã lưu
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Icon
            name="home"
            type="material-community"
            color={Colors.grey2}
            size={30}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View style={{marginLeft: 5}}>
              <Text style={styles.title_text}>Địa chỉ gần nhà</Text>
              <Text style={styles.text}>18, Trần Quốc Tuấn</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#CE4C2E',
                  textDecorationLine: 'underline',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            name="map-marker"
            type="material-community"
            color={Colors.grey2}
            size={30}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <View style={{marginLeft: 5}}>
              <Text style={styles.title_text}>Địa chỉ làm việc</Text>
              <Text style={styles.text}>18, Trần Quốc Tuấn</Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#CE4C2E',
                  textDecorationLine: 'underline',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.view3}>
        <View
          style={{
            height: '50%',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="history"
              type="material-community"
              color={Colors.grey2}
              size={30}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View style={{marginLeft: 5}}>
                <Text style={styles.title_text}>Lịch sử gọi hàng</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="cash"
              type="material-community"
              color={Colors.grey2}
              size={30}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View style={{marginLeft: 5}}>
                <Text style={styles.title_text}>Thưởng từ nhà hàng</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon
              name="cog"
              type="material-community"
              color={Colors.grey2}
              size={30}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
              }}>
              <View style={{marginLeft: 5}}>
                <Text style={styles.title_text}>Cài đặt khác</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
            onPress={logOut}>
            <Icon
              name="logout"
              type="material-community"
              color={Colors.grey1}
              size={25}
            />
            <Text style={[styles.title_text, {marginLeft: 10}]}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1.3,
    // backgroundColor: 'pink',
    borderBottomWidth: 5,
    borderBottomColor: '#DFDFDF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1.3,
    // backgroundColor: 'yellow',
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 5,
    padding: 20,
  },
  view3: {
    flex: 2,
    padding: 20,
    // backgroundColor: '#ccc',
  },
  avt: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title_text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.grey2,
  },
  text: {
    color: Colors.grey2,
  },
});
