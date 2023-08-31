import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";


export default function Consulta ({ navigation }) {
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Minhas Consultas</Text>
            <View>
                <Text>Nenhuma consulta agendada</Text>
            </View>
            
         

            <Pressable style={styles.botaoAgendar} onPress={() => navigation.navigate('agendarConsultas')}>
                <Text style={{color:'white', fontWeight:'bold'}}>AGENDAR NOVA CONSULTA</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '',
        padding: 20
    },
    botaoAgendar: {
        width: '100%',
        height: 35,
        backgroundColor: '#d0252d',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        
    },
    
})