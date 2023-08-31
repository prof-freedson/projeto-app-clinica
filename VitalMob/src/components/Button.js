import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function PrimaryButton(props) {
    return (
        <TouchableOpacity activeOpacity={.7} style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
    },
});