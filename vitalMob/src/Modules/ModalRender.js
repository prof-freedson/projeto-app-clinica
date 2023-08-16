import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const ModalRender = ({ visible, novisible }) => {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    const closeModal = () => {
        setModalVisible(false);
        if (novisible) {
            novisible();
        }
    };

    useEffect(() => {
        if (!visible) {
            setModalVisible(false);
        }
    }, [visible]);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    closeModal();
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Versão Beta</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={closeModal}>
                            <Text style={styles.textStyle}>Fecha</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

{/* <ModalRender visible={modalVisible} novisible={() => setModalVisible(false)} /> */}

export default ModalRender;
