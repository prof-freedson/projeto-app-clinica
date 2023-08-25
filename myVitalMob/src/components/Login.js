import React, { useState } from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import Input from '../modules/inputConfig';
import Style from '../css/Style'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const Styles = {
        styles: Style[2],
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
                    <Input inputConf={['email', 'Nome...', setEmail, 'email-address', false, 'not']} Label={['Nome']} />
                </View>
                <View>
                    <Input inputConf={['numeric', 'Senha...', setSenha, 'numeric', true, 'yes']} Label={['Senha']} />
                </View>
                <View>
                    <Pressable onPress={() => {
                        console.log(email)
                        console.log(senha)
                    }}>
                        <Text>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    );
};

export default Login;
