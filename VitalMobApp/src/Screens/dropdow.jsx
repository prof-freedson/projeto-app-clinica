import React, { useState } from 'react';
import { View, Button, Text, Platform, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

export default function Dropd() {
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

  return (
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
  );
}

const styles = StyleSheet.create({
  timeButton: {
    height: 40,
    width: 295,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    paddingLeft: 15,}
 
});