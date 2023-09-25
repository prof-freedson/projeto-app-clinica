import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Button, SelectDate, SetselectDate, selectExameType } from 'react-native'

export default function AgendarExames({ navigation }) {

  const exames = () => {
    const [exames, setExames] = useState([]);
    const [selectDate, setSelectDate] = useState('');
    const [selectExameType, setSelectExameType] = useState('');

    useEffect(() => {
      // Carregar exames agendados do Firebase
      loadExames();
    }, []);

    const loadExames = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = database.ref(`users/${user.uid}/exames`);
        userRef.on('value', snapshot => {
          const examesData = snapshot.val();
          if (examesData) {
            const examesList = Object.values(examesData);
            setExames(examesList);
          }

        });
      }
    };
  }
  const AgendarExame = async () => {
    const user = auth.currentUser;
    if (user) {
      const exameData = {
        data: setselectDate,
        tipo: selectExameType,
      };

      const userRef = database.ref(`users/${user.uid}/exames`);
      const newExameRef = userRef.push();
      await newExameRef.set(exameData);

      //Recarregar a lista de exames após agendar
      loadExames();
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Escolha a data:</Text>
        <TextInput
          placeholder="DD/MM/AAAA"
          value={SelectDate}
          onChangeText={SetselectDate}
          style={styles.input}
        />
        <Text>Escolha o tipo de exame:</Text>
        <TextInput
          placeholder="Tipo de Exame"
          value={selectExameType}
          onChangeText={selectExameType}
          style={styles.input}
        />
        <Button title="Agendar Exame" onPress={AgendarExame} />
      </View>
      <FlatList
        data={exames}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.exameItem}>
            <Text>Data: {item.data}</Text>
            <Text>Tipo: {item.tipo}</Text>
          </View>
        )}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  ontainer: {
    backgroundcolor: '#fff',
    borderradius: '5px',
    boxshadow: '#FF6347',
    padding: '20px',
    width: '300px',
    textalign: 'center',
  },


  form: {
    display: 'flex',
    flexdirection: 'column',
  },

  label: {
    marginbottom: '5px',
    fontsize: '14px',
  },


  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderradius: '3px',
    fontsize: '14px',
  },


  button: {
    padding: '10px 15px',
    backgroundcolor: 'white',
    color: 'red',
    border: 'none',
    borderradius: '3px',
    fontsize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },



  modal: {
    display: 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundcolor: 'red',
  },

  modalcontent: {
    backgroundcolor: '#fff',
    padding: '20px',
    borderradius: '5px',
    boxshadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: '300px',
    textalign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  close: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontsize: '20px',

  }



})
