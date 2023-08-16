import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen, PainelScreen } from './src/Screens/Screens';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Painel">
            {props => <PainelScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }} 
          >
            {props => <LoginScreen {...props} _Sucess={setUser} />}
          </Stack.Screen>
        )}
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
