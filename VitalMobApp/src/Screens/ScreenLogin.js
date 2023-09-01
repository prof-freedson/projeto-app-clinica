import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, Image, Alert, TouchableOpacity, AppState, ActivityIndicator } from 'react-native';
import Input from '../modules/inputConfig';
import Style from '../css/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyModal from '../modules/Modal';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../firebaseConfig';
import { query, where, getDocs, collection } from "firebase/firestore";

const ScreenLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [appState, setAppState] = useState(AppState.currentState);
  const [ultimaDataVista, setUltimaDataVista] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Novo estado para indicar o carregamento

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  }

  const loginAccount = async () => {
    setIsLoading(true); // Inicia o indicador de atividade

    try {
      const credencial = await signInWithEmailAndPassword(auth, email, senha);
      const user = credencial.user;
      console.log("Usuário Identificado");
      const userCollectionRef = collection(db, 'usuarios');
      const q = query(userCollectionRef, where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      let userData, docRef;
      querySnapshot.forEach((doc) => {
        userData = doc.data();
        docRef = doc.id;
      });

      navigation.navigate('Inicio', { userData, docRef });

    } catch (error) {
      console.error("Erro no login");
      console.error("Mensagem: ", error.message);
      console.error("Código", error.code);
    } finally {
      setIsLoading(false); // Encerra o indicador de atividade
    }
  }

  let emaiNewValue = "";
  let senhaNewValue = "";

  /* if (userData) {
    emaiNewValue = userData.email || "";
    senhaNewValue = userData.senha || "";
    // console.log('User Data:', userData);
  }  */
  // else {
  //   console.log('UserData não está presente nos parâmetros da rota.');
  // }

  // console.log(emaiNewValue, senhaNewValue);

  const Styles = {
    styles: Style[2],
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

      const SaveData = async (key, data) => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(data));
          //   console.log('Dados salvos com sucesso');
        } catch (error) {
          console.log('Erro ao salvar dados:', error);
        }
      };

      SaveData('keyToday', vistoRecente);

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
          source={require('../assets/Logo/Logo.png')}
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
          <Input inputConf={['email', 'Nome...', setEmail, 'email-address', false, 'not']} Label={['']} Value={[emaiNewValue]} id={"Email"} />
        </View>
        <View style={Styles.styles.container.ContainerBoxInput}>
          <Input inputConf={['numeric', 'Senha...', setSenha, 'numeric', true, 'yes']} Label={['']} Value={[senhaNewValue]} id={"Senha"} />
        </View>
        <View style={[Styles.styles.container.ContainerBoxInput, { marginTop: 10, flexDirection: 'row-reverse' }]}>
          <TouchableOpacity
            onPress={handleOpenModal}
          >
            <Text >
              Esqueceu a Senha ?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.styles.container.ContainerBoxInput}>
          {isLoading ? (
            <View style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#DD242C" />
            </View>
          ) : (
            <Pressable
              style={[Styles.styles.container.ContainerBoxInput.ButtonSend]}
              onPress={loginAccount}>
              <Text style={Styles.styles.container.ContainerBoxInput.ButtonSend.Text}>
                Login
              </Text>
            </Pressable>
          )}
        </View>

        <View style={Styles.styles.container.ContainerBoxInput}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registro')}
          >
            <Text style={{ textAlign: 'center', marginTop: 20 }} >Não tem Conta ? <Text style={{ textDecorationLine: 'underline', color: '#DD242C', fontWeight: 'bold' }}>Registrar</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      <MyModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default ScreenLogin;