import React, { useState,useEffect } from 'react';
import { View, Pressable, Text, Image, Alert, TouchableOpacity,AppState } from 'react-native';
import Input from '../modules/inputConfig';
import Style from '../css/Style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../firebaseConfig';
import { query, where, getDocs, collection } from "firebase/firestore";

import { navigation } from '@react-navigation/native';

const ScreenLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [appState, setAppState] = useState(AppState.currentState);
    const [ultimaDataVista, setUltimaDataVista] = useState(null);


    async function login(){
        try {
            const credencial = await signInWithEmailAndPassword(auth, email, senha);
            const user = credencial.user;
            const userCollectionRef = collection(db, 'usuarios');
            const q = query(userCollectionRef, where("userId", "==", user.uid));
            const querySnapshot = await getDocs(q);
            
            let userData, docRef;
            querySnapshot.forEach((doc) => {
                userData = doc.data();
                docRef = doc.id;
            });
        
            navigation.navigate('inicio', { userData, docRef });
        
        } catch (error) {
            console.error("Erro no login");
            console.error("Mensagem: ", error.message);
            console.error("Código", error.code);
        }
    }


    const emaiNewValue = ""
    const senhaNewValue = ""

    const Styles = {
        styles: Style[2],
    };

    const navigateToRegistro = () => {
        navigation.navigate('Registro'); 
    };

    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
          if (appState.match(/inactive|background/) && nextAppState === 'active') {
            const now = new Date();
            setUltimaDataVista(now);
          }
          setAppState(nextAppState);
        };
      
        const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);
      
        return () => {
          appStateSubscription.remove(); 
        };
      }, [appState]);

      const LoginUserRecente = () => {
        if (ultimaDataVista) {
          const formattedDate = ultimaDataVista.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long', 
            year: 'numeric',
          });
      
          const vistoRecente = {
            fulldate: formattedDate
          };
      
          const SaveData = async (key,data) => {
            try {
              await AsyncStorage.setItem(key, JSON.stringify(data));
            //   console.log('Dados salvos com sucesso');
            } catch (error) {
              console.log('Erro ao salvar dados:', error);
            }
          };
      
          SaveData('keyToday',vistoRecente);
      
          return (
            <View style={Styles.styles.container.ContainerInput.Login}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                🔵 Visto Recente: <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'green' }}>{formattedDate}</Text>
              </Text>
            </View>
          );
        }
      };
      
      
    

    return (
        <View style={Styles.styles.container}>
            <View style={Styles.styles.container.ContainerImgLogo}>
                <Image
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    source={{ uri: 'https://www.iconpacks.net/icons/2/free-healthcare-icon-3610-thumb.png' }}
                />
            </View>

            <View style={Styles.styles.container.ContainerInput}>
                <View>
                    <Text style={Styles.styles.container.ContainerInput.Text}>Login</Text>
                    <View style={Styles.styles.container.ContainerInput.Login} >
                        <LoginUserRecente />
                    </View>
                </View>
                <View style={Styles.styles.container.ContainerBoxInput} >
                    <Input inputConf={['email', 'Nome...', setEmail, 'email-address', false, 'not']} Label={['']} Value={[emaiNewValue,senhaNewValue]} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['numeric', 'Senha...', setSenha, 'numeric', true, 'yes']} Label={['']} />
                </View>
                <View style={[Styles.styles.container.ContainerBoxInput, { marginTop: 10, flexDirection: 'row-reverse' }]}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                Alert.alert(
                                    'Recuperar Senha...',
                                    'Confirma ? usuario@gmail.com ',
                                    [
                                        { text: 'Cancelar', onPress: () => console.log('Cancelado') },
                                        { text: 'Comfirmar', onPress: () => console.log('Prosseguir') },

                                    ],
                                    Option = {
                                        userInterfaceStyle: 'Dark'
                                    }
                                )
                            }
                        }
                    >
                        <Text >
                            Esqueceu a Senha ?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Pressable
                        style={[Styles.styles.container.ContainerBoxInput.ButtonSend]}
                        onPress={login}>
                            <Text style={Styles.styles.container.ContainerBoxInput.ButtonSend.Text}>
                                Login
                            </Text>
                    </Pressable>
                </View>

                <View style={Styles.styles.container.ContainerBoxInput}>
                    
                    <TouchableOpacity
                    onPress={navigateToRegistro}
                    >
                        <Text style={{textAlign:'center',marginTop:20}} >
                            Não tem Conta ?
                            <Text style={{textDecorationLine:'underline',color:'#DD242C',fontWeight:'bold'}}>Registrar</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default ScreenLogin;