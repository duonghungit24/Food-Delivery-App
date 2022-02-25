import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Parameters} from '../global/styles';
import {Icon} from 'react-native-elements';
const Header = ({title, type , navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 10}}>
        <Icon
          type="material-community"
          name={type}
          color={Colors.headerText}
          size={28}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: Parameters.headerHeight,
  },
  headerTitle: {
    color: Colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
export default Header;
