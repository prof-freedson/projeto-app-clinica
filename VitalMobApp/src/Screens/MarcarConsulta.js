import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { PrimaryButton } from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../../firebaseConfig';
import { addDoc, doc, collection } from "@firebase/firestore";

export default function Inicio({ navigation, route }) {
  const [titulo, setTitulo] = React.useState("");
  const [dia, setDia] = React.useState("");
  const [hora, setHora] = React.useState("");
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
        <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.goBack() }}>
          <Icon name='arrow-left' size={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Marcando Consulta</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.label}>Título da Consulta</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira o título da consulta'}
          onChangeText={(text) => { setTitulo(text) }}
        />
        <Text style={styles.label}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a data aqui (DD/MM/AAAA)'}
          onChangeText={(text) => { setDia(text) }}
        />
        <Text style={styles.label}>Hora</Text>
        <TextInput
          style={styles.input}
          placeholder={'Insira a hora aqui'}
          onChangeText={(text) => { setHora(text) }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton text='Marcar' onPress={createAppointment} />
      </View>
      <View style={styles.buttonContainer}>
        {/* Adicione aqui o botão "Datas Disponíveis" com ícone, estilo e funcionalidade */}
        <TouchableOpacity activeOpacity={0.7} onPress={() => { /* Adicione a função para exibir datas disponíveis */ }}>
          <View style={styles.dateButton}>
            <Icon name='calendar' size={20} color='white' />
            <Text style={styles.dateButtonText}>Datas Disponíveis</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#DD242C', // Cor de fundo do cabeçalho
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  midContainer: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', // Cor do texto do rótulo
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Cor de fundo do campo de entrada
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  dateButton: {
    backgroundColor: '#FF3333', // Cor de fundo do botão "Datas Disponíveis"
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  dateButtonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
