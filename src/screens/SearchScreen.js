import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchComponent from '../components/SearchComponent';
export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
