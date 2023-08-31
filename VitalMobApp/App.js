import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomeScreens } from './src/modules/renderScreens';

import LoginScreen from './src/Screens/ScreenLogin';
import ResgiScreen from './src/Screens/ScreenRegistro';
import Inicio from './src/Screens/Inicio';
import AboutScreen from './src/Screens/AboutScreen';
import Exames from './src/Screens/Exames';
import MarcarExame from './src/Screens/MarcarExame';
import Consultas from './src/Screens/Consultas';
import MarcarConsulta from './src/Screens/MarcarConsulta';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState(null)

    return (
        <NavigationContainer>
             <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: '#f4f4f4',
                            height: 30,
                            elevation: 0,
                        },
                        headerTransparent: false,
                        headerTintColor: '#000',
                    }}
                    initialRouteName="Splash"
                >
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Home" component={HomeScreens} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Inicio" component={Inicio} />
                    <Stack.Screen name="Sobre" component={AboutScreen} />
                    <Stack.Screen name="Exames" component={Exames} />
                    <Stack.Screen name="MarcarExame" component={MarcarExame} />
                    <Stack.Screen name="Consultas" component={Consultas} />
                    <Stack.Screen name="MarcarConsulta" component={MarcarConsulta} />
                    <Stack.Screen
                        name="Registro"
                        options={{
                            title: '',
                            headerShown: true,
                        }}
                        component={ResgiScreen}
                    />
             </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
