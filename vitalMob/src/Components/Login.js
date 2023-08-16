import React, { useState } from 'react';
import { Text, View, TouchableOpacity ,StyleSheet } from 'react-native';
import myStyle from '../../Css/Style';
import InputRender from '../Modules/InputLogin';
import ModalRender from '../Modules/ModalRender';
import { firebase } from '../Config/firebaseConfig';
import SvgComponent from '../Modules/renderSVG';
import Confvisual from '../Components/Config'

const style = {
    container: myStyle[1]
};

const Login = ({ navigation, _Sucess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const conFigUser = email;

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const user = response.user.email; // email _cap
                if (user === conFigUser) {
                    const confiuser = response.user;
                    _Sucess(confiuser);
                } else {
                    alert("Dados Não Encontrados");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <View style={style.container}>
            {/* <Confvisual /> */}
            <View style={style.container.containerHeader}>
                <View style={style.container.SvgComponent}>
                    <SvgComponent _Index={0} _List={false} />
                </View>
            </View>
            <View style={style.container.containerFooter}>
                <View style={style.container.containerButtons}>
                    <TouchableOpacity
                        style={style.container.Buttons}
                    >
                        <Text style={style.container.config} >Tools</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.container.Buttons}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text style={style.container.config} >Sobre</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.container.containerInput}>
                    <View style={style.container.Input}>
                        <InputRender keyboard={"text"} callBack={setEmail} text={"Email"} placeholder={"Digite o Email..."} Svg={1} />
                    </View>
                    <View style={style.container.Input}>
                        <InputRender keyboard={"text"} callBack={setPassword} text={"Senha"} placeholder={"Digite a Senha..."} Svg={2} />
                    </View>
                </View>
                <View style={style.container.styleNavigation} >
                    <Text style={style.container.bozzz}>Não Possui Conta ?</Text>
                    <TouchableOpacity style={style.container.styleNavigationButton}
                        onPress={() => navigation.navigate('Registration')}
                    >
                        <Text style={style.container.styleNavigationText}>Criar Conta</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.container._propsView}></View>
                <View style={style.container.styleContainerSend} >
                    <TouchableOpacity style={style.container.styleButtonSend}
                     onPress={onLoginPress}
                    >
                        <Text style={style.container.boz}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={style.container.bozz}>Versão 1.0</Text>
                </View>
                <ModalRender visible={modalVisible} novisible={() => setModalVisible(false)} />
            </View>
        </View>
    )
}

export default Login;
