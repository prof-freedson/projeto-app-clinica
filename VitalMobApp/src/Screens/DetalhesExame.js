import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../components/Icon';
import MapView from 'react-native-maps';

export default function DetalhesExame({ navigation, route }) {
    const userData = route.params.userData;
    const docRef = route.params.docRef;
    const exam = route.params.exam;

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={.7} onPress={() => navigation.goBack()}>
                    <Icon name='arrow-circle-left' size={20} />
                </TouchableOpacity>
                <Text>Detalhes do Exame</Text>
            </View>
            <View style={styles.bigContainer}>
                <Text style={styles.title}>Exame:</Text>
                <Text style={styles.mLeft}>Nome: {exam.titulo}</Text>
                <View style={[styles.smallContainer, styles.mLeft]}>
                    <Text>Data: {exam.data}</Text>
                    <Text style={styles.mLeft}>Hora:{exam.hora}</Text>
                </View>
            </View>
            <View style={styles.bigContainer}>
                <Text style={styles.title}>Localização do Exame:</Text>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <Text style={styles.mLeft}>Filial: Filial-A</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bigContainer: {
        padding: 8
    },
    smallContainer: {
        flexDirection: 'row',
    },
    mLeft: {
        marginLeft: 10,
    },
});