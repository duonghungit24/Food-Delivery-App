import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {Colors} from '../global/styles';
export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.wrapHeader}>
          <View style={styles.wrapperInfor}>
            <Avatar
              size={75}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
              avatarStyle={styles.avatar}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: Colors.cardbackground,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Dương Hùng
              </Text>
              <Text style={{color: Colors.cardbackground, fontSize: 14}}>
                hungduong721@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.wrapFavourite}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: Colors.cardbackground,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                1
              </Text>
              <Text style={{fontSize: 14, color: Colors.cardbackground}}>
                Yêu thích của tôi
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: Colors.cardbackground,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                0
              </Text>
              <Text style={{fontSize: 14, color: Colors.cardbackground}}>
                Giỏ hàng của tôi
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Thanh toán"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Mã giảm giá"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Cài đặt"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Hỗ trợ"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
        <View style={{borderTopWidth: 1, borderTopColor: Colors.grey5}}>
          <Text style={styles.titleSwitch}>Khác</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Nền tối</Text>
            <View style={{paddingLeft: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Đăng xuất"
        // onPress={() => }
        icon={({color, size}) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
        style={{marginBottom: 10}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapHeader: {
    backgroundColor: Colors.buttons,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wrapperInfor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'white',
  },
  wrapFavourite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
  },
  titleSwitch: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    color: Colors.grey2,
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
