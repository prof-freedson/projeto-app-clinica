
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'; // Adicione o import do ActivityIndicator
import Style from '../css/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carrosel from '../modules/RenderCarrosel';
import { useNavigation } from '@react-navigation/native';

const Styles = {
  styles: Style[1],
};

const imgGlobal = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAB...';

const imgCarrosel = [imgGlobal, imgGlobal, imgGlobal];

const imgCaptions = ['Rápido Atendimento', 'Facil de Acessar', 'VitalMob Sempre \n com Você'];

const Home = () => {
  const navigation = useNavigation();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para controle de carregamento

  // const getDataFromAsyncStorage = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     const allData = await AsyncStorage.multiGet(keys);

  //     const parsedData = allData.map(([key, value]) => ({
  //       key,
  //       data: JSON.parse(value),
  //     }));



  //     console.log('Dados armazenados:', parsedData);
  //     setIsLoading(false); // Finaliza o carregamento
  //   } catch (error) {
  //     console.log('Erro ao obter dados:', error);
  //   }
  // };

  // getDataFromAsyncStorage()

  useEffect(() => {
    const checkUserData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const allData = await AsyncStorage.multiGet(keys);

        for (const [key, value] of allData) {
          const userData = JSON.parse(value);
          if (userData.id && userData.email) {
            setShouldNavigate(true);
            navigation.navigate('Login');
            break;
          }
        }
      } catch (error) {
        console.log('Erro ao obter dados do AsyncStorage:', error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento, independentemente do resultado da verificação
      }
    };

    checkUserData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#c42a17" animating={true} />
        <Text style={{ marginTop: 10 }}>Verificando os Dados ...</Text>
      </View>
    );
  }


  return (
    <View style={Styles.styles.container}>
      <View style={Styles.styles.container}>
        <View style={Styles.styles.container.boxContainerNamed}>
          <Carrosel imgs={imgCarrosel} captions={imgCaptions} />
        </View>
        <View style={Styles.styles.container.boxContainerAllButtons}>
          <View style={Styles.styles.container.boxContainerButtons}>
            <TouchableOpacity style={Styles.styles.container.Button.ButtonPrimary}  onPress={() => navigation.navigate('Login')}>
              <Text style={Styles.styles.container.Button.ButtonPrimary.Text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.styles.container.Button.ButtonSecondary} onPress={() => navigation.navigate('Registro')}>
              <Text style={Styles.styles.container.Button.ButtonSecondary.Text}>Registrar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default Home;
