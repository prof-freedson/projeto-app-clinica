import React from 'react';
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useFonts, PlayfairDisplay_600SemiBold as playfair } from "@expo-google-fonts/playfair-display";
import { query, where, getDocs, getDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import CardConsulta from '../components/CardConsulta';
import { useIsFocused } from '@react-navigation/native';

export default function Consulta ({ navigation, route }) {
    const [ appointments, setAppointments ] = React.useState([]);
    const [ exist, setExist ] = React.useState("none");
    const userData = route.params.userData;
    const docRef = route.params.docRef;
    const isFocused = useIsFocused();
    let [fontsLoaded, fontError] = useFonts({
        playfair
    });

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const userDocRef = doc(db, 'usuarios', docRef);
            const userAppointmentsRef = collection(userDocRef, 'consultas');
            const q = query(userAppointmentsRef);
            const querySnapshot = await getDocs(q);
    
            const fetchedAppointments = [];
            querySnapshot.forEach((doc) => {
              const appointmentData = doc.data();
              fetchedAppointments.push(appointmentData);
            });
            setAppointments(fetchedAppointments);
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
            const docSnap = await getDoc(q);

            if (docSnap.exists()) {
                await deleteDoc(docSnap);
            } else {
                console.log("Consulta não existe");
            }
        } catch (error) {
            console.log(error);
        };
    };


    if (!fontsLoaded && !fontError) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30, color: '#1a4252', fontWeight: 'bold', fontFamily: 'playfair' }}>Minhas Consultas</Text>

            <FlatList
                style={styles.midContainer}
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardConsulta titulo={item.titulo} data={item.data} hora={item.hora} onPressIcon={() => deleteAppointment(item.id)} />
                )}
            />

            <Pressable style={styles.botaoAgendar} onPress={() => navigation.navigate('AgendarConsultas', { userData, docRef })}>
                <Text style={{color:'white', fontWeight:'bold'}}>AGENDAR NOVA CONSULTA</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '',
        padding: 20
    },
    botaoAgendar: {
        width: '100%',
        height: 35,
        backgroundColor: '#d0252d',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 5,
        
    },
    
})