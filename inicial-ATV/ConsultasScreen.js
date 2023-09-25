import { View, Text, StyleSheet } from "react-native"
export default function ConsultasScreen(){
    return(
        <View style={styles.scree}>
            <Text>Consultas na espera</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    scree: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        marginVertical: 10,
    }

})