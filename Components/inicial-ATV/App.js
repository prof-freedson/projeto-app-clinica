import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import TeelasIniciaisScreen from './TeelasIniciaisScreen';
import ExamesScreen from './ExamesScreen';
import ConsultasScreen from './ConsultasScreen';
import WhatsappScreen from './WhatsappScreen';
import MapsScreen from './MapsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Incio"
        component={TeelasIniciaisScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exames"
        component={ExamesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="file-medical" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consultas"
        component={ConsultasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Whatsapp"
        component={WhatsappScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="whatsapp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
