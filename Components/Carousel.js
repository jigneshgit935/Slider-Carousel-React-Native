import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;

  const carouselData = [
    {
      id: '01',
      image: require('../assets/slider_1.jpg'),
    },
    {
      id: '02',
      image: require('../assets/slider_2.jpg'),
    },
    {
      id: '03',
      image: require('../assets/slider_3.jpg'),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }}
        />
      </View>
    );
  };

  // Render Dot Indicator
  const renderDotsIndicator = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          style={{
            backgroundColor: 'red',
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      );
    });
  };

  return (
    <View>
      <Text>Carousel</Text>

      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled={true}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        {renderDotsIndicator()}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
