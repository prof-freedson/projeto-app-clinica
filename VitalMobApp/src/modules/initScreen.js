import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Style from '../css/Style';

const Styles = {
  container: Style[0],
};

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate('Home'); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <Image
        style={{ width: '100%', height: '50%', resizeMode: 'contain' }} // Substituí "objectFit" por "resizeMode"
        source={require('../assets/Logo/Logo.png')}
      />
      <ActivityIndicator size="large" color="#c42a17" />
    </View>
  );
};

export default SplashScreen;
