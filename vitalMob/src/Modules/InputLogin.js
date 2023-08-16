import React, { useState } from 'react';
import { TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import myStyle from '../../Css/Style';
import SvgComponent from '../Modules/renderSVG';

const style = {
    container: myStyle[2]
}



const InputRender = ({ keyboard, callBack, text, placeholder , Svg }) => {
 
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (newValue) => {
        setInputValue(newValue);

        if (callBack) {
            callBack(newValue);
        }
    };

    return (
        <KeyboardAvoidingView>
            <View>
                <View>
                    <Text style={style.container.Label}>{text}</Text>
                </View>
                <View style={style.container._PropsInput}>
                    <View style={style.container.Svg}>
                        <SvgComponent _Index={Svg} _List={false} />
                    </View>
                    <TextInput

                        style={style.container.Inputs}
                        inputMode={keyboard}
                        placeholder={placeholder}
                        value={inputValue}
                        onChangeText={handleInputChange}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default InputRender;
