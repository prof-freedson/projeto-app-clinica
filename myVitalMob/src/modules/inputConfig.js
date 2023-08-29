import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Style from '../css/Style'

const Styles = {
  styles: Style[2],
};

const InputConfig = ({ inputConf = ['', '', '', '', '', ''], Label = [''] }) => {
  const [handeText, setHandeText] = useState('');
  const [handeView, setHandeView] = useState(true);

  function handleInput(text) {
    setHandeText(text);
    inputConf[2](text);
  }

  function renderInput() {

    const verifyInput = {
      inputmode: inputConf[0],
      placeholder: inputConf[1],
      keyboardtype: inputConf[3],
      button: inputConf[5]
    }

    function viewButton(){
      if(handeView == true){
          setHandeView(false)
      }
      else{
        setHandeView(true)
      }
    }

    if (verifyInput.inputmode && verifyInput.placeholder) {

      if (verifyInput.button == "yes") {

        return (
  
            <View  style={Styles.styles.container.ContainerBoxInput.inputView}>
              <View style={Styles.styles.container.ContainerBoxInput.inputView.Input}>
                <TextInput
                
                  inputMode={inputConf[0]}
                  placeholder={inputConf[1]}
                  keyboardType={inputConf[3]}
                  secureTextEntry={handeView}
                  onChangeText={handleInput}
                  value={handeText}
                />
              </View>
              <TouchableOpacity 
              style={Styles.styles.container.ContainerBoxInput.inputView.Button}
              onPress={
                viewButton 
              }>
                <Text>👁️</Text>
              </TouchableOpacity>
            </View>
        )
      }
      else {
        return (
                <TextInput
                  style={Styles.styles.container.ContainerBoxInput.Input}
                  inputMode={inputConf[0]}
                  placeholder={inputConf[1]}
                  keyboardType={inputConf[3]}
                  secureTextEntry={inputConf[4]}
                  onChangeText={handleInput}
                  value={handeText}
                />

        )
      }

    }

  }

  return (
    <View>
      {renderInput()}
    </View>
  );
};

export default InputConfig;
