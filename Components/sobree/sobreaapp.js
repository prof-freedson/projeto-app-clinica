// src/navigation/RootNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from '../screens/AboutScreen';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AboutScreen />
    </NavigationContainer>
  );
};

export default RootNavigation;
