import { Alert, Text, Image, View, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function CartaoExame({ nome, data, hora, preco, orientaTitulo, orientaDetalhes, imagem }) {
    return (
        <View style={styles.exameImagem}>
            <TouchableOpacity>
                <ImageBackground style={{ width: 111, height: 120 }} source={imagem} imageStyle={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#dd242cc0', fontSize: 10, fontWeight: 'bold', margin: 10, borderRadius: 5, lineHeight: 10, textAlign: 'center' }}>Clique e {'\n'} saiba mais!</Text>
                </ImageBackground>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#ffffff', height: 120, width: '70%', fontSize: 20, fontWeight: 'bold', paddingLeft: 10, justifyContent: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>

                <Text style={styles.cartaoTexto}>{nome}</Text>
                <Text style={styles.cartaoTexto}>Data: {data}  </Text>
                <Text style={styles.cartaoTexto}>Horário: {hora}</Text>
                <Text style={styles.cartaoTexto}>Preço: R$ {preco}</Text>

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
        borderRadius: 5,
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