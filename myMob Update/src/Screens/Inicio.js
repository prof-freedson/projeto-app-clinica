import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Inicio = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View></View>
            <View style={styles.banner}>
                <Image styles={styles.imagem} source={require('../assets/familia.png')} />
                <View style={styles.position1}><Text style={styles.text}>Consultas <Text style={styles.eComecial}>&</Text> Exames</Text></View>
            </View >
            <View >
                <View style={styles.linhaBotao}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("consulta")}>
                        <FontAwesome icon={faUserDoctor} size={40} style={styles.icon} />
                        <Text style={styles.botion}>Consultas</Text>
                    </Pressable>

                    <Pressable style={styles.button} onPress={() => navigation.navigate("exame")}>
                        <FontAwesome icon={faMicroscope} size={40} style={styles.icon} />
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
        justifyContent: 'center'
    },
    banner: {
        alignItems: 'center'
    },
    tex: {
        fontSize: 1,
        marginVertical: 30
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 1,
        marginVertical: 240,
        fontFamily: 'Anton'
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
    }
});

export default Inicio;