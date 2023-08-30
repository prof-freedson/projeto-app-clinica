import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen,HomeScreens } from './src/modules/renderScreens'; 
import LoginScreen from './src/Screens/ScreenLogin'
import ResgiScreen from './src/Screens/ScreenRegistro'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} 
            initialRouteName="Splash"
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home"   component={HomeScreens} />
                <Stack.Screen name="Login"  component={LoginScreen} />
                <Stack.Screen name="Registro"  component={ResgiScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
