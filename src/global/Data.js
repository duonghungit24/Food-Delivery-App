export const filterData = [
  {name: 'Fast food', image: require('../assets/fastfood.jpg'), id: '0'},
  {name: 'Burgers', image: require('../assets/hamburger.png'), id: '1'},
  {name: 'Salads', image: require('../assets/salad.jpg'), id: '2'},
  {name: 'Hotdog', image: require('../assets/hot-dog.png'), id: '3'},
  {name: 'Fries', image: require('../assets/french-fries.png'), id: '4'},
  {name: 'Pizza', image: require('../assets/pizza.png'), id: '5'},
  {name: 'Sea food', image: require('../assets/seafood.png'), id: '6'},
];

export const filterData2 = [
  {
    name: 'Fast food',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
    id: '0',
  },
  {
    name: 'Burgers',
    image:
      'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg',
    id: '1',
  },
  {
    name: 'Salads',
    image: 'https://kenh14cdn.com/2017/photo-4-1508068499766.jpg',
    id: '2',
  },
  {
    name: 'Hotdog',
    image:
      'https://rgb.vn/wp-content/uploads/2016/05/rgb_nghe-thuat-chup-anh-mon-an-loi-cuon_thumb1.jpg',
    id: '3',
  },
  {
    name: 'Chinese',
    id: '4',
    image:
      'https://img5.thuthuatphanmem.vn/uploads/2021/11/07/100-hinh-anh-do-an-cute-de-thuong-cuc-dep_113040611.jpg',
  },
  {
    name: 'Mexican',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
    id: '5',
  },
  {
    name: 'Sea food',
    id: '6',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
  },
  {
    name: 'Chinese Food',
    id: '7',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
  },
  {
    name: 'Mexican pie',
    id: '8',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
  },
  {
    name: 'Ocean dish',
    id: '9',
    image:
      'https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg',
  },
];

export const restaurantsData = [
  {
    restaurantName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps,Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings... ',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://images.pexels.com/photos/1350511/pexels-photo-1350511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://images.pexels.com/photos/2383398/pexels-photo-2383398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images:
      'https://images.pexels.com/photos/6763279/pexels-photo-6763279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/709823/pexels-photo-709823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: ' 15 Atlas Rd, Kempton Park',
    images:
      'https://images.pexels.com/photos/772513/pexels-photo-772513.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    averageReview: 4.7,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image:
          'https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://images.pexels.com/photos/812868/pexels-photo-812868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
    id: 3,
  },
];
