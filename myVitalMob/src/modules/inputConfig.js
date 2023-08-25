import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

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
          <View>
            <View>
              <Text>{Label[0]}</Text>
            </View>
            <View>
              <View>
                <TextInput
                  inputMode={inputConf[0]}
                  placeholder={inputConf[1]}
                  keyboardType={inputConf[3]}
                  secureTextEntry={handeView}
                  onChangeText={handleInput}
                  value={handeText}
                />
              </View>
              <TouchableOpacity onPress={
                viewButton 
              }>
                <Text>Visualizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
      else {
        return (
          <View>
            <View>
              <Text>{Label[0]}</Text>
            </View>
            <View>
                <TextInput
                  inputMode={inputConf[0]}
                  placeholder={inputConf[1]}
                  keyboardType={inputConf[3]}
                  secureTextEntry={inputConf[4]}
                  onChangeText={handleInput}
                  value={handeText}
                />
            </View>
          </View>
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
