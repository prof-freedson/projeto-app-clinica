import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from './Icon';

export default function CardConsulta(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.info}>
                <Text>{props.titulo}</Text>
                <Text>Dia: {props.data}</Text>
                <Text>Hora: {props.hora}</Text>
            </View>
            <TouchableOpacity activeOpacity={.4} onPress={props.onPressIcon}>
                <Icon name='trash' size={18} bColor='crimson' color="#FFF" style={{marginRight: 10}} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 8,
    },
    info: {
        padding: 10,
    },
});