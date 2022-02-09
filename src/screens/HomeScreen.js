import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
export default function HomeScreen() {
  const [selected, setSelected] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[10]} // dùng cái này để khi scroll cái component đầu tiên k bị scroll
        showsVerticalScrollIndicator={true} // show thanh scroll
      >
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={() => setSelected(true)}>
            <View
              style={{
                ...styles.btnSelect,
                backgroundColor: selected ? Colors.buttons : Colors.grey5,
              }}>
              <Text>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected(false)}>
            <View
              style={{
                ...styles.btnSelect,
                backgroundColor: !selected ? Colors.buttons : Colors.grey5,
              }}>
              <Text>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{borderRadius: 30}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.grey5,
                paddingHorizontal: 15,
                paddingVertical: 5,
                marginLeft: 5,
                borderRadius:30
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={Colors.grey1}
                  size={26}
                />
                <Text>160 Quang Trung</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                  backgroundColor: Colors.cardbackground,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  marginRight: 20,
                  borderRadius: 12,
                }}>
                <Icon
                  type="material-community"
                  name="clock-time-four"
                  color={Colors.grey1}
                  size={26}
                  style={{marginRight: 10}}
                />
                <Text>Now</Text>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <Icon
                type="material-community"
                name="tune"
                color={Colors.grey1}
                size={40}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnSelect: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
