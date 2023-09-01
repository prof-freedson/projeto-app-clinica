import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../components/Button';
import Icon from '../components/Icon';
import CardConsulta from '../components/CardConsulta';
import { query, where, getDocs, getDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { useIsFocused } from '@react-navigation/native';

export default function Consultas({ navigation, route }) {
  const [exams, setExams] = React.useState([]); 
  const userData = route.params.userData;
  const docRef = route.params.docRef;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'usuarios', docRef);
        const userExamsRef = collection(userDocRef, 'consultas');
        const q = query(userExamsRef);
        const querySnapshot = await getDocs(q);

        const fetchedExams = [];
        querySnapshot.forEach((doc) => {
          const examData = doc.data();
          fetchedExams.push(examData);
        });
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
      const userExamsRef = collection(userDocRef, 'consultas');
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name='arrow-circle-left' size={20} />
            </TouchableOpacity>
            <Text>Consultas</Text>
        </View>
        <FlatList
            style={styles.midContainer}
            data={exams}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
                <CardConsulta title={item.titulo} dia={item.dia} hora={item.hora} onPressIcon={() => deleteAppointment(item.id)} />
            )}
        />
        <View style={styles.lowContainer}>
            <PrimaryButton text='Marcar Nova' onPress={() => navigation.navigate('MarcarConsulta', {userData, docRef})} />
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
});