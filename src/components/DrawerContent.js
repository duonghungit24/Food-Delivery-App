import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements';
import {Colors} from '../global/styles';
export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: Colors.buttons,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
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
              <Text style={{color: Colors.cardbackground, fontWeight: 'bold', fontSize:18}}>1</Text>
              <Text style= {{ fontSize:14, color: Colors.cardbackground}}>Yêu thích của tôi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text  style={{color: Colors.cardbackground, fontWeight: 'bold', fontSize:18}}>0</Text>
              <Text style= {{ fontSize:14, color: Colors.cardbackground}}>Giỏ hàng của tôi</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingBottom: 5
  },
});
