import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMicroscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

const Inicio = ({ navigation, route }) => {
    const userData = route.params.userData;
    const docRef = route.params.docRef;

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image styles={styles.imagem} source={require('../assets/familia.png')} />
                <TouchableOpacity activeOpacity={.7} style={styles.botaoSobre} onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.textoSobre}>Sobre nós</Text>
                </TouchableOpacity>
                <View style={styles.position1}><Text style={styles.text}>Consultas <Text style={styles.eComecial}>&</Text> Exames</Text></View>
            </View >
            <View >
                <View style={styles.linhaBotao}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("InicioConsulta", {userData, docRef})}>
                        <FontAwesomeIcon icon={faUserDoctor} size={40} style={styles.icon} />
                        <Text style={styles.botion}>Consultas</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("Exames", {userData, docRef})}>
                        <FontAwesomeIcon icon={faMicroscope} size={40} style={styles.icon} />
                        <Text style={styles.botion}>Exames</Text>
                    </Pressable>
                    </View>
                </View>
             </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        alignItems: 'center'
    },
    tex: {
        fontSize: 1,
        marginVertical: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        zIndex: 1,
        marginVertical: 240
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        marginVertical: 40,
        justifyContent: 'center',
        height: 200,
        width: '45%',
        borderRadius: 4,
        alignItems: 'center',
        padding: 10
    },
    linhaBotao: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    icon: {
        color: '#ff3333',
        marginRight: 1,
        justifyContent: 'center',
        borderColor: '#ccc',
    },
    eComecial: {
        color: '#ff3333'
    },
    botion: {
        fontSize: 20
    },
    imagem: {
        width: 130,
        height: 130,
        objectFit: 'contain',
        position: 'relative',
    },
    position1: {
        position: 'absolute',
        alignItems: 'center',
        top: 70,
    },
    botaoSobre: {
        position: 'absolute',
        top: '90%',
        alignItems: 'center',
        backgroundColor: "#FF3333",
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    textoSobre: {
        color: "white",
        fontWeight: 'bold',
    },
});

export default Inicio;