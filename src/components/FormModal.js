import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const FormModal = props => {
  const {onPress, visible, content} = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
      hardwareAccelerated>
      <View style={styles.centered_view}>
        <View style={styles.warning_modal}>
          {/* <View style={styles.warning_title}>
            <Text style={styles.text}>Thông báo</Text>
          </View> */}
          <View style={{flex: 4, justifyContent: 'center'}}>
            <Text style={[styles.text_content, {fontWeight: 'bold'}]}>
              {content}
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#3333',
              width: '100%',
            }}></View>
          <TouchableOpacity
            onPress={onPress}
            style={{
              flex: 1.5,
              justifyContent: 'center',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <Text style={styles.text_content}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FormModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Modal: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    backgroundColor: '#ff8c52',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_modal: {
    width: 300,
    height: 150,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  text_content: {
    textAlign: 'center',
    color: '#000000',
  },
});
