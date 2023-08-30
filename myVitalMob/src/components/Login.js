import React, { useState } from 'react';
import { View, Pressable, Text, Image, Alert, TouchableOpacity } from 'react-native';
import Input from '../modules/inputConfig';
import Style from '../css/Style'

import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    const Styles = {
        styles: Style[2],
    };

    const navigateToRegistro = () => {
        navigation.navigate('Registro'); 
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
                </View>
                <View style={Styles.styles.container.ContainerBoxInput} >
                    <Input inputConf={['email', 'Nome...', setEmail, 'email-address', false, 'not']} Label={['']} />
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
                        onPress={() => {
                            console.log(email)
                            console.log(senha)
                        }}>
                        <Text style={Styles.styles.container.ContainerBoxInput.ButtonSend.Text}>
                            Login
                        </Text>
                    </Pressable>
                </View>

                <View style={Styles.styles.container.ContainerBoxInput}>
                    
                       <TouchableOpacity 

                        onPress={navigateToRegistro}
                        
                       >
                       <Text style={{textAlign:'center',marginTop:20}} >Não tem Conta ? <Text style={{textDecorationLine:'underline',color:'#DD242C',fontWeight:'bold'}}>Registrar</Text></Text>
                       </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default Login;
