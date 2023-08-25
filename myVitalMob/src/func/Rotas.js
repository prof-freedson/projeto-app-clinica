import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  LoginScreens  from '../Screens/ScreenLogin';

const RostasApp = ({ rotas }) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name={rotas} component={LoginScreens} />
    </Stack.Navigator>
  );
}

export default RostasApp;
