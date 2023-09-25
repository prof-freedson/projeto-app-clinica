import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Consultas from './src/screens/Consulta';
import AgendarConsultas from './src/screens/AgendarConsultas';
import InicioTeste from './src/screens/InicioTeste';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio" screenOptions={InicioTeste}>
        <Stack.Screen name='inicio' component={InicioTeste} />
        <Stack.Screen name='consultas' component={Consultas} />
        <Stack.Screen name='agendarConsultas' component={AgendarConsultas} />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
