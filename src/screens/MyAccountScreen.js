import {ceil, create} from 'lodash';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function MyAccountScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header title="Tài khoản" type="arrow-left" navigation={navigation} />
      <View style={styles.view1}>
        {/* avatar */}
        <View style={styles.avt}>
          <TouchableOpacity
            style={{
              width: 85,
              height: 85,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.grey1 + '20',
              borderRadius: 50,
            }}>
            <Icon
              name="folder-multiple-image"
              type="material-community"
              color={Colors.grey1}
              size={30}
            />
          </TouchableOpacity>
        </View>

        {/* Name */}
        <Text style={{fontSize: 17, color: Colors.grey1, fontWeight: '670'}}>
          Khánh Vũ
        </Text>
        <TouchableOpacity>
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
                  textDecorationLine: 'underline line',
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
                  textDecorationLine: 'underline line',
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
            }}>
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
