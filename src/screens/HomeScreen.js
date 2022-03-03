import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {Colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {filterData, restaurantsData} from '../global/Data';
import FoodCard from '../components/FoodCart';
import CountDown from 'react-native-countdown-component';
const Screen_Width = Dimensions.get('window').width;
export default function HomeScreen({navigation}) {
  const [selected, setSelected] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        stickyHeaderIndices={[0]} // dùng cái này để khi scroll cái component đầu tiên k bị scroll
        showsVerticalScrollIndicator={true} // show thanh scroll
      >
        <View
          style={{backgroundColor: Colors.cardbackground, paddingBottom: 10}}>
          <View style={styles.wrapSelect}>
            <TouchableOpacity onPress={() => setSelected(true)}>
              <View
                style={{
                  ...styles.btnSelect,
                  backgroundColor: selected ? Colors.buttons : Colors.grey5,
                }}>
                <Text>V.chuyển</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelected(false);
                navigation.navigate('RestaurantsMapScreen');
              }}>
              <View
                style={{
                  ...styles.btnSelect,
                  backgroundColor: !selected ? Colors.buttons : Colors.grey5,
                }}>
                <Text>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.wrapLocation}>
            <View style={styles.wrapViewLocation}>
              <View style={styles.wrapAddress}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={Colors.grey1}
                  size={26}
                />
                <Text>160 Quang Trung</Text>
              </View>
              <View style={styles.wrapClock}>
                <Icon
                  type="material-community"
                  name="clock-time-four"
                  color={Colors.grey1}
                  size={26}
                  style={{marginRight: 10}}
                />
                <Text>Bây giờ</Text>
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
        <View style={styles.headerWrapText}>
          <Text style={styles.headerText}>Danh Mục</Text>
        </View>
        <View>
          <FlatList
            data={filterData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable key={index} onPress={() => setIndexCheck(item.id)}>
                <View
                  style={
                    indexCheck === item.id
                      ? styles.smallCardSelected
                      : styles.smallCard
                  }>
                  <Image source={item.image} style={{height: 55, width: 55}} />
                  <Text
                    style={
                      indexCheck === item.id
                        ? styles.smallCardTextSelected
                        : styles.smallCardText
                    }>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerWrapText}>
          <Text style={styles.headerText}>Giao hàng miễn phí bây giờ</Text>
        </View>
        <View>
          <View style={styles.countdown}>
            <Text style={styles.textCountdown}>Thay đổi trong</Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{backgroundColor: Colors.lighGreen}}
              digitTxtStyle={{color: Colors.cardbackground}}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Phút', s: 'Giây'}}
            />
          </View>
          <FlatList
            data={restaurantsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <FoodCard
                  screenWidth={Screen_Width * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  averageReview={item.averageReview}
                  businessAddress={item.businessAddress}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerWrapText}>
          <Text style={styles.headerText}>Khuyến mãi</Text>
        </View>
        <View>
          <FlatList
            data={restaurantsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <FoodCard
                  screenWidth={Screen_Width * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  averageReview={item.averageReview}
                  businessAddress={item.businessAddress}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerWrapText}>
          <Text style={styles.headerText}>Nhà hàng gần bạn</Text>
        </View>
        <View>
          {restaurantsData.map(item => (
            <View key={item.id} style={{marginBottom: 10}}>
              <FoodCard
                screenWidth={Screen_Width - 22}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                averageReview={item.averageReview}
                businessAddress={item.businessAddress}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {selected && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantsMapScreen')}>
            <Icon
              type="material"
              name="place"
              size={32}
              color={Colors.buttons}
            />
            <Text style={{color: Colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
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
  wrapSelect: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wrapLocation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  wrapViewLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    borderRadius: 30,
  },
  headerWrapText: {
    backgroundColor: Colors.grey5,
    marginVertical: 15,
    paddingVertical: 8,
  },
  wrapAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  wrapClock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: Colors.cardbackground,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 20,
    borderRadius: 16,
  },
  headerText: {
    color: Colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: Colors.grey5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 100,
    margin: 10,
    marginBottom: 5,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: Colors.buttons,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
    width: 80,
    height: 100,
    margin: 5,
    marginBottom: 5,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: Colors.grey2,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: Colors.cardbackground,
  },
  countdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCountdown: {
    color: Colors.grey1,
    marginTop: -15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  floatButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: 'white',
    elevation: 10,
    right: 15,
    bottom: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
});
