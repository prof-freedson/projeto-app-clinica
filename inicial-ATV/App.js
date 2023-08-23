import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Inicio from './Inicio';
import Consulta from './Consulta';
import Exame from "./Exame";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio" screenOptions={{headerShown: false}}>
        <Stack.Screen name="inicio" component={Inicio}/>
        <Stack.Screen name="consulta" component={Consulta} />
        <Stack.Screen name="exame" component={Exame} />

              </Stack.Navigator>
    </NavigationContainer>
  );
}

