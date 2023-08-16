// PainelScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const PainelScreen = (extraData) => {

  return (
    <View>
      <Text>Bem Vindo {extraData.extraData.email}</Text>
    </View>
  );
};

export default PainelScreen;
