import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Style from '../css/Style';
import DataUser from '../data/.json'; // Fix the import path
import Carrosel from '../modules/RenderCarrosel';

import Rotas from '../func/Rotas'

const Styles = {
  styles: Style[1],
};

const imgGlobal =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAB...';

const imgCarrosel = [imgGlobal, imgGlobal, imgGlobal];

const imgCaptions = [
  'Rápido Atendimento',
  'Facil de Acessar',
  'VitalMob Sempre \n com Você',
];

const Home = () => {
  function VerificarUsers() {
    if (DataUser[0].id) {
     return <Rotas rotas={"Login"} />
    } else {
      return (
        <View style={Styles.styles.container}>
          <View style={Styles.styles.container.boxContainerNamed}>
            <Carrosel imgs={imgCarrosel} captions={imgCaptions} />
          </View>
          <View style={Styles.styles.container.boxContainerAllButtons}>
            <View style={Styles.styles.container.boxContainerButtons}>
              <TouchableOpacity style={Styles.styles.container.Button.ButtonPrimary}>
                <Text style={Styles.styles.container.Button.ButtonPrimary.Text}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.styles.container.Button.ButtonSecondary}>
                <Text style={Styles.styles.container.Button.ButtonSecondary.Text}>Registrar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  return (
    <VerificarUsers />
  );
}

export default Home;
