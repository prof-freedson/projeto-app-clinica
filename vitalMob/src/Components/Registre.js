import React, { useState } from 'react';
import SvgComponent from '../Modules/renderSVG';
import { Text, View, TouchableOpacity } from 'react-native';
import myStyle from '../../Css/Style';
import InputRender from '../Modules/InputLogin';
import { firebase } from '../Config/firebaseConfig';

const style = {
  container: myStyle[3],
};

const Registration = ({ navigation }) => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPress = () => {
    // Check if the email already exists
    firebase
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(signInMethods => {
        if (signInMethods.length === 0) {
          return firebase.auth().createUserWithEmailAndPassword(email, password);
        } else {
          Alert.alert('Email já existe', 'Este email já está registrado.');
        }
      })
      .then(response => {
        if (response) {
          // const user = response.user;
          navigation.navigate('Login');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <View style={style.container}>
      <View style={style.container.containerHeader}>
        <View style={style.container.SvgComponent}>
          <SvgComponent _Index={0} _List={false} />
        </View>
      </View>
      <View style={style.container.containerFooter}>
        <View style={style.container.NamedLogo}>
          <Text style={style.container.NamedLogo.textX}>Criar Conta</Text>
        </View>
        <View style={style.container.containerInput}>
          <View style={style.container.Input}>
            <InputRender keyboard="text" callBack={setName} text="Nome" placeholder="Digite o Nome..." Svg={1} />
          </View>
          <View style={style.container.Input}>
            <InputRender keyboard="text" callBack={setEmail} text="Email" placeholder="Digite o Email..." Svg={3} />
          </View>
          <View style={style.container.Input}>
            <InputRender keyboard="text" callBack={setPassword} text="Senha" placeholder="Digite a Senha..." Svg={2} />
          </View>
        </View>
        <View style={style.container.styleContainerSend} >
          <TouchableOpacity style={style.container.styleButtonSend}
          >
            <Text style={style.container.NamedLogo.textX } onPress={onRegisterPress} >Registrar</Text>
            <View style={style.container.Svg}>
              <SvgComponent _Index={4} _List={false} />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default Registration;
