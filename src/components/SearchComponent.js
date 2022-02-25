import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {Colors} from '../global/styles';
import {filterData} from '../global/Data';

export default function SearchComponent() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const [data, setData] = useState([...filterData]);
  const textInput = useRef(0);
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>Bạn đang tìm kiếm cái gì?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" tranparent="false" visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View>
                <Icon
                  name={textInputFossued ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(false);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.View>
              <TextInput
                style={{width: '90%'}}
                placeholder="Tìm kiếm..."
                autoFocus={false}
                ref={textInput}
              />
              <Animatable.View>
                <Icon
                  name={textInputFossued ? 'cancel' : null}
                  iconStyle={{color: Colors.grey3}}
                  type="material"
                  style={{marginRight: -10}}
                  onPress={() => {
                    textInput.current.clear();
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultScreen', {item: item.name});
                  setModalVisible(false);
                  setTextInputFossued(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: Colors.grey2, fontSize: 15}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
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

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: Colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {fontSize: 24, padding: 5, color: Colors.grey2},

  view1: {
    height: 70,
    justifyContent: 'center',

    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {fontSize: 24, padding: 5, color: Colors.grey2},
  modal: {
    flex: 1,
  },
});
