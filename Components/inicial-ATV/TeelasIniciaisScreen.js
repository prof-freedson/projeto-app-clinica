import React from "react";
import { ImageBackground, Pressable } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMicroscope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';


const TeelasIniciaisScreen = ({ navigation }) => {
    { } return (
        <View style={styles.container}>

            <View style={styles.banner} />
            <ImageBackground style={{ flex: 1 }} source={require('./assets/foto/familia.jpg')} />
            <View style={styles.position1}><Text style={styles.text}>Consultas <Text style={styles.eComecial}>&</Text> Exames</Text></View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
        marginVertical: 460,
        marginHorizontal: 55

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
        width: 10,
        height: 10,
        objectFit: 'contain',
        position: 'absolute',
    },
    position1: {
        position: 'absolute',
        alignItems: 'center',
    }
});

export default TeelasIniciaisScreen;