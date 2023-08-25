import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from './src/modules/renderScreens'; // Replace with the actual path
import Style from './src/css/Style'

const Styles = {
    container: Style[0],
};

const Stack = createStackNavigator();

const App = () => {
    const [loading, setLoading] = useState(true);
    const [nameLoading] = useState("‎")

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);

    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name={loading?nameLoading:"Vital Mob"}  component={loading ? LoadingScreen : HomeScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const LoadingScreen = () => (
    <View style={Styles.container}>
        <Image
            style={{ width: '100%', height: '50%', objectFit:'contain' }}
            source={{ uri: 'https://www.iconpacks.net/icons/2/free-healthcare-icon-3610-thumb.png' }}
        />
        <ActivityIndicator size="large" color="#c42a17" />
    </View>
);

export default App;
