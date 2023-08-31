import React, { useState} from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Input from '../modules/inputConfig';
import Style from '../css/Style'
import DataBase from '../data/dataBase';
import Toast from 'react-native-toast-message'; // Importar o react-native-toast-message
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { addDoc, collection } from "@firebase/firestore";

const Styles = {
    styles: Style[3],
};

const ScreenRegistro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmesenha, setConfirmeSenha] = useState('');
    const [genero, setGenero] = useState('male');

    const verificarSenhas = () => {
        if (senha === confirmesenha) {
            return true;
        } else {
            console.log('As senhas não correspondem.');
            return false;
        }
    };

    const handleRegistrar = async () => {
        if (verificarSenhas()) {
          if (nome === "" || email === "" || numero === "" || senha === "" || confirmesenha === "") {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Preencha todos os campos obrigatórios.',
                position:'bottom',
            });
            return;
          }
      
          /* console.log('id:', generateCustomId());
          console.log('Nome:', nome);
          console.log('Email:', email);
          console.log('Número:', numero);
          console.log('Senha:', senha);
          console.log('Confirmação de Senha:', confirmesenha);
          console.log('Gênero:', genero); */
      
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const uid = userCredential.user.uid;
            const usersCollection = collection(db, 'usuarios');
            const userData = {
                id: uid,
                nome,
                email,
                numero,
                senha,
                genero,
            };
            const docRef = await addDoc(usersCollection, {
                userId: uid,
                nome: nome,
                email: email,
                numero: numero,
                senha: senha,
                genero: genero,
            });
      
            
            console.log(userCredential.user);
            
            DataBase({ callBack: 'Save', key: "dataKey", data: userData }) // [Save , Delete , View]
    

            Toast.show({
              type: 'success',
              text1: 'Sucesso',
              text2: 'Dados salvos com sucesso!',
            });

            console.log("Document written with ID: ", docRef.id);
      
            navigation.navigate('Login');
          } catch (error) {
            console.log('Erro ao salvar informações no AsyncStorage:', error);
            Toast.show({
              type: 'error',
              text1: 'Erro',
              text2: 'Ocorreu um erro ao salvar os dados.',
            });
          }
        }
      };

    const generateCustomId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let customId = '#';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            customId += characters[randomIndex];
        }

        return customId;
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
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['text', 'Nome...', setNome, 'default', false, 'not']} Label={'Nome completo *'} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['email', 'Email...', setEmail, 'email-address', false, 'not']} Label={'Email'} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['numeric', 'Numero...', setNumero, 'numeric', false, 'not']} Label={'Telefone'} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['numeric', 'Senha...', setSenha, 'default', true, 'not']} Label={'Senha'} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Input inputConf={['numeric', 'Confirma Senha...', setConfirmeSenha, 'default', true, 'not']} Label={'Confirma Senha'} />
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Text>Gênero:</Text>
                    <RadioButton.Group
                        onValueChange={newValue => setGenero(newValue)} value={genero}

                    >
                        <View style={Styles.styles.container.ContainerBoxInput.GroupRadiosButtons}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton value="male" />
                                <Text>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton value="female" />
                                <Text>Feminino</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Pressable onPress={handleRegistrar}
                        style={[Styles.styles.container.ContainerBoxInput.ButtonSend, { marginTop: 10 }]}
                    >
                        <Text style={Styles.styles.container.ContainerBoxInput.ButtonSend.Text}>
                            Registrar
                        </Text>
                    </Pressable>
                </View>
                <View style={Styles.styles.container.ContainerBoxInput}>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ textAlign: 'center', marginTop: 10 }} >Ja Possui Conta ? <Text style={{ textDecorationLine: 'underline', color: '#DD242C', fontWeight: 'bold' }}>Login</Text></Text>
                    </Pressable>
                </View>
                <Toast />
            </View>
        </View>
    );
};

export default ScreenRegistro;