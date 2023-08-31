import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import CartaoExame from '../components/CartaoExame';
import { query, where, getDocs, getDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { useIsFocused } from '@react-navigation/native';
import Icon from '../components/Icon';

export default function Exames({ navigation, route }) {
  const [exams, setExams] = React.useState([]); 
  const userData = route.params.userData;
  const docRef = route.params.docRef;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'usuarios', docRef);
        const userExamsRef = collection(userDocRef, 'exames');
        const q = query(userExamsRef);
        const querySnapshot = await getDocs(q);
        console.log('passou aqui', docRef);

        const fetchedExams = [];
        querySnapshot.forEach((doc) => {
          const examData = doc.data();
          fetchedExams.push(examData);
        });
        console.log(fetchedExams);
        setExams(fetchedExams);
      } catch (error) {
        console.log(error);
      }
    };
    if(isFocused) {
      fetchData();
    }
  }, [isFocused]);

  async function deleteAppointment(consultID) {
    try {
      const userDocRef = doc(db, 'usuarios', docRef);
      const userExamsRef = collection(userDocRef, 'exames');
      const q = query(userExamsRef, where("id", "==", consultID));
      console.log(q);
      const docSnap = await getDocs(q);

      if (docSnap.exists()) {
        await deleteDoc(docSnap);
      } else {
        console.log("Consulta não existe");
      }
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <>
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('Inicio', { userData, docRef})}>
                <Icon name='arrow-circle-left' size={20} />
            </TouchableOpacity>
            <Text>Exames</Text>
        </View>
        <FlatList
            style={styles.midContainer}
            data={exams}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CartaoExame
                    nome={item.titulo}
                    data={item.data}
                    hora={item.hora}
                    preco={item.preco}
                    orientaTitulo={item.orientaTitulo}
                    orientaDetalhes={item.orientaDetalhes}
                    imagem={item.imagem}
                    // onPressIcon={() => deleteAppointment(item.id)}
                />
            )}
        />
        <View style={styles.lowContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MarcarExame', {userData, docRef})}>
                <Text style={styles.buttonText}>Marcar Nova</Text>
            </TouchableOpacity>
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
    lowContainer: {
        marginTop: 'auto',
        padding: 10
    },
    logo: {
        width: 150,
        height: 150,
    },
    button: {
        backgroundColor: '#FF3333',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});