import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import Input from '../modules/inputConfig';

const Registro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmesenha, setConfirmeSenha] = useState('');



    return (
        <View>
            <View>
                <View>
                    <Input inputConf={['text', 'Nome...', setNome,'text',false,'not']} Label={['Nome completo *']} />
                </View>
                <View>
                    <Input inputConf={['email', 'Email...', setEmail,'email-address',false,'not']} Label={['Email']} />
                </View>
                <View>
                    <Input inputConf={['tel', 'Numero...', setNumero,'numeric',false,'not']} Label={['Telefone']} />
                </View>
                <View>
                    <Input inputConf={['numeric', 'Senha...', setSenha,'numeric',true,'not']} Label={['Senha']} />
                </View>
                <View>
                    <Input inputConf={['numeric', 'Confirma Senha...', setConfirmeSenha,'numeric',true,'not']} Label={['Confirma Senha']} />
                </View>
                <View>
                    <Pressable onPress={() => {
                        console.log(nome)
                        console.log(email)
                        console.log(numero)
                        console.log(senha)
                        console.log(confirmesenha)
                    }}>
                        <Text>
                            Registrar
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    );
};

export default Registro;
