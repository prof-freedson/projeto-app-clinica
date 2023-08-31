import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { PrimaryButton } from '../components/Button';
import Icon from '../components/Icon';
import { db } from '../../firebaseConfig';
import { addDoc, doc, collection } from "@firebase/firestore";


export default function Inicio({ navigation, route }) {
  const [ titulo, setTitulo ] = React.useState("");
  const [ dia, setDia ] = React.useState("");
  const [ hora, setHora ] = React.useState("");
  const userData = route.params.userData;
  const docRef = route.params.docRef;

  async function createAppointment() {
    try {
      const userDocRef = doc(db, 'usuarios', docRef);
      const userExamsRef = collection(userDocRef, 'consultas');
      const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
      const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
      const generatedID = getRandomLetters(5) + getRandomDigits(5);

      await addDoc(userExamsRef, {
        id: generatedID,
        titulo: titulo,
        dia: dia,
        hora: hora,
      });
    } catch (e) {
      console.error("Erro adicionando consulta: ", e);
    }
  }


  return (
    <>
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={.4} onPress={() => {navigation.goBack()}}>
                <Icon name='arrow-circle-left' size={20} />
            </TouchableOpacity>
            <Text>Marcando Consulta</Text>
        </View>
        <View style={styles.midContainer}>
            <Text>Titulo Consulta</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a data aqui'} onChangeText={(text) => {setTitulo(text)}} />
            <Text>Data</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a data aqui'} onChangeText={(text) => {setDia(text)}} />
            <Text>Hora</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a hora aqui'} onChangeText={(text) => {setHora(text)}} />
        </View>
        <View style={styles.lowContainer}>
            <PrimaryButton text='Marcar' onPress={createAppointment} />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topContainer: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
});