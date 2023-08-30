import { Alert, Text, Image, View, Pressable, StyleSheet } from "react-native";

export default function CartaoExame({nomeExame, dataExame, horaExame, precoExame, orientaTitulo, orientaDetalhes, imagem}){
    return(
        <View style={styles.exameImagem}>

                <Image style={{ width: '30%', height: 120, objectFit: 'cover', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} source={imagem} />
                <View style={{ backgroundColor: '#ffffff', height: 120, width: '70%', fontSize: 20, fontWeight: 'bold', paddingLeft: 10, justifyContent: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text style={styles.cartaoTexto}>{nomeExame}</Text>
                    <Text style={styles.cartaoTexto}>Data: {dataExame}  </Text>
                    <Text style={styles.cartaoTexto}>Horário: {horaExame}</Text>
                    <Text style={styles.cartaoTexto}>Preço: R$ {precoExame}</Text>
                    <Pressable style={styles.botaoAlerta} onPress={() => Alert.alert(orientaTitulo, orientaDetalhes)}>
                        <Text style={styles.botaoTexto}>Orientações: Clique aqui!</Text>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    exameImagem: {
        height: 100,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    cartaoTexto: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#3e4145',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    botaoAlerta: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#dd242c'
    },
    botaoTexto: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff'
    }
})