import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Exames from './screens/Exames';
import TesteData from './screens/TesteData';
import AgendarExames from './screens/AgendarExames';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="exames" screenOptions={{headerShown: false}}>
        <Stack.Screen name='exames' component={Exames} />
        <Stack.Screen name='testeData' component={TesteData} />
        <Stack.Screen name='agendarExame' component={AgendarExames}/>
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
