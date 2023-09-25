import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carrosel = ({imgs}) => {
  return (
    <Swiper
      style={styles.wrapper}
      loop={true}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={styles.pagination}
      autoplay={true}
      autoplayTimeout={3}
    >
      {imgs.map((img, index) => (
        <View style={styles.slide} key={index}>
          <Image source={{ uri: img }} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dot: {
    backgroundColor: '#rgba(255,255,255,.3)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pagination: {
    bottom: 10,
    
  },
  caption: {
    position:'absolute',
    left:'5%',
    bottom:'10%',
    color: '#fff',
    fontSize: 30,
    textAlign: 'left',
  },
});

export default Carrosel;
