import React, { useState, } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const DoctorsListScreen = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Dermatologist' },
  
  ]);

  const handleSchedule = (doctor) => {
    // Aqui levaria o usuário para a tela de agendamento com os detalhes do médico
    console.log('Agendar consulta com:', doctor.name);
  };

  return (
    <View>
      <Text>Lista de Médicos</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.specialty}</Text>
            <Button title="Agendar" onPress={() => handleSchedule(item)} />
          </View>
        )}
      />
    </View>
  );
};




