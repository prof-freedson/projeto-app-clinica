import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Pressable, Modal, Platform, TouchableOpacity } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { DropDownPicker } from "react-native-dropdown-picker";
import Dropd from './dropdow';
import { db } from '../../firebaseConfig';
import { addDoc, doc, collection } from "@firebase/firestore";

export default function AgendarConsultas({ navigation, route }) {
  const userData = route.params.userData;
  const docRef = route.params.docRef;
  const [ medico, setMedico ] = React.useState("");
  const [ data, setData ] = React.useState("");
  const [ hora, setHora ] = React.useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('Selecione');
  const [showPicker, setShowPicker] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false); // Estado para controlar a visibilidade do Modal

  const timeOptions = [
    'Clinico Geral', 'Pediatra', 'Geriatra', 'Dentista', 
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowPicker(Platform.OS === 'ios');
    setSelectedDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const formattedDate = format(selectedDate, 'dd/MM/yyyy');

  async function createAppointment() {
    try {
        const userDocRef = doc(db, 'usuarios', docRef);
        const userExamsRef = collection(userDocRef, 'consultas');
        const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
        const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
        const generatedID = getRandomLetters(5) + getRandomDigits(5);

        await addDoc(userExamsRef, {
          id: generatedID,
          titulo: `Consulta com ${selectedTime}`,
          data: formattedDate,
          hora: hora,
        });
    } catch (e) {
        console.error("Erro adicionando consulta: ", e);
    }
  }

 

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Agende suas Consultas</Text>
      <View style={{ alignItems: 'center' }}>
      <View>
        <Button onPress={showDatepicker} title="Selecionar Data" />
      </View>
        {showPicker && (
          // Exibição do calendário com DateTimePicker
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
          // Fim da exibição do calendário com DateTimePicker
        )}
        <Text>Data selecionada: {formattedDate}</Text>
        <TextInput style={styles.textoInput} placeholder="Hora 14:05" onChangeText={(text) => setHora(text)} />

        <TouchableOpacity onPress={() => setShowTimeModal(true)}>
          <Text>Selecione a Especialidade:</Text>
          <Text style={styles.timeButton}>{selectedTime}</Text>
        </TouchableOpacity>

        {/* Configuração do Modal */}
        <Modal
          visible={showTimeModal}
          transparent={true}
          animationType="slide"
        //Final da configuração do modal
        >
          {/* Elementos que serão exibidos no Modal */}
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {timeOptions.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.timeOption}
                  onPress={() => {
                    setSelectedTime(time);
                    setShowTimeModal(false);
                  }}
                >
                  <Text>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Final dos elementos que serão exibidos no Modal  */}
          </View>
        </Modal>
      </View>
    

      <Text style={{ color: 'black', marginVertical: 20, marginHorizontal: 50 }}>Ao agendar a consulta, você estará de acordo com os termos de uso e privacidade</Text>
      <View style={styles.linhaBotoes}>
        <Pressable style={styles.botao} onPress={createAppointment}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>AGENDAR</Text>
        </Pressable>
        <Text>ou</Text>
        <Pressable style={styles.botao}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>CANCELAR</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },
  textoInput: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15
  },
  botao: {
    height: 30,
    backgroundColor: '#d0252d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5
  },
  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  linkLogin: {
    flexDirection: 'row',
    marginTop: 50
  },
  timeButton: {
    height: 40,
    width: 295,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,
  },
});
