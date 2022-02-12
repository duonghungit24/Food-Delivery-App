import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../global/styles';
export default function FoodCard({
  OnPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <View style={{...styles.image}}>
          <Image source={{uri: images}} style={{...styles.image,width: screenWidth-1.5}} />
        </View>
        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>
          <View style={styles.location}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={Colors.grey2}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.min}>{farAway} Min</Text>
            </View>
            <View >
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={styles.average}>{averageReview}</Text>
          <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey4,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 160,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  location: {
    flex:1,
    flexDirection: 'row',
    paddingVertical:4,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: Colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: Colors.grey3,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: Colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52,0.3)',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 13,
  },
});
