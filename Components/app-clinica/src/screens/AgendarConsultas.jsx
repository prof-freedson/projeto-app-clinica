import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Pressable, Platform, TouchableOpacity } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { DropDownPicker } from "react-native-dropdown-picker";
import Dropd from './dropdow';

export default function AgendarConsultas({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('08:00');
  const [showPicker, setShowPicker] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

 

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Agende suas Consultas</Text>
      <TextInput style={styles.textoInput} placeholder="CPF" />
      <TextInput style={styles.textoInput} placeholder="Nome Completo" />
      <TextInput style={styles.textoInput} placeholder="Endereço" />
      <TextInput style={styles.textoInput} placeholder="Telefone" />
      <Dropd></Dropd>
    

      <Text style={{ color: 'black', marginVertical: 20, marginHorizontal: 50 }}>Ao agendar a consulta, você estará de acordo com os termos de uso e privacidade</Text>
      <View style={styles.linhaBotoes}>
        <Pressable style={styles.botao}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>AGENDAR</Text>
        </Pressable>
        <Text>ou</Text>
        <Pressable style={styles.botao}>
          <TouchableOpacity>
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
    width: '75%',
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
  }
});
