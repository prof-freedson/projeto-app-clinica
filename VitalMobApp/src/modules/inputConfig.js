import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Style from '../css/Style';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Styles = {
  styles: Style[2],
};

const InputConfig = ({ inputConf = ['', '', '', '', '', ''], Label = [''], Value = [''], id }) => {
  const [handeText, setHandeText] = useState('');
  const [handeView, setHandeView] = useState(false);
  const [handeye, setHandeye] = useState('eye-slash')


  // if(id === "Email"){
  //   console.log(`essa é a Seu Email :${Value[0]}`)
  // }
  // else if(id === "Senha"){
  //   console.log(`essa é a Sua Senha :${Value[0]}`)
  // }
  // else{
  //   console.log("Passe o Valor do ID correto id={'Senha'} ou id={'Email'} ")
  // }

  function handleInput(text) {
    setHandeText(text);
    inputConf[2](text);
  }

  function renderInput() {
    const verifyInput = {
      inputmode: inputConf[0],
      placeholder: inputConf[1],
      keyboardtype: inputConf[3],
      button: inputConf[5],
    };

    function viewButton() {
      if (handeView === false) {
        setHandeye("eye")
        setHandeView(true);
      } else {
        setHandeye("eye-slash")
        setHandeView(false);
      }
    }

    if (verifyInput.inputmode && verifyInput.placeholder) {
      if (verifyInput.button === 'yes') {
        return (
          <View style={Styles.styles.container.ContainerBoxInput.inputView}>
            <View style={Styles.styles.container.ContainerBoxInput.inputView.Input}>
              <TextInput
                inputMode={inputConf[0]}
                placeholder={inputConf[1]}
                keyboardType={inputConf[3]}
                secureTextEntry={!handeView}
                onChangeText={handleInput}
                value={
                  id === "Email" || id === "Senha"
                    ? Value[0] || handeText
                    : null
                }
              />
            </View>
            <TouchableOpacity
              style={Styles.styles.container.ContainerBoxInput.inputView.Button}
              onPress={viewButton}>
              <FontAwesome name={handeye} color={'gray'} size={20} />
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <TextInput
            style={Styles.styles.container.ContainerBoxInput.Input}
            inputMode={inputConf[0]}
            placeholder={inputConf[1]}
            keyboardType={inputConf[3]}
            secureTextEntry={inputConf[4] === 'yes'} // Fixed here
            onChangeText={handleInput}
            value={
              id === "Email" || id === "Senha"
                ? Value[0] || handeText
                : null
            }
          />
        );
      }
    }
  }

  return <View>{renderInput()}</View>;
};

export default InputConfig;
