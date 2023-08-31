import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TouchableOpacityBase, TextInput } from 'react-native';
import { db } from '../../firebaseConfig';
import { addDoc, doc, collection } from "@firebase/firestore";
import Icon from '../components/Icon';


export default function Inicio({ navigation, route }) {
  const [ nome, setNome ] = React.useState("");
  const [ data, setData ] = React.useState("");
  const [ hora, setHora ] = React.useState("");
  const [ erro, setErro ] = React.useState("");
  const exames = [
    {
        nome: 'Hemograma Completo',
        orientaTitulo: 'Preparo:',
        orientaDetalhes: "Jejum de 8 horas; \n\nChegar com 30 minutos de antecedência; \n\nLevar documento oficial com foto; \n\nMenores, virem acompanhados pelos pais ou responsável",
        preco: '16,00',
        imagem: require('../assets/images/hemo.jpg')
    },
    {
        nome: 'Eletrocardiograma',
        orientaTitulo: 'Preparo:',
        orientaDetalhes: "Trazer documento com foto, cartão do convênio e pedido médico; \n\nChegar 30 minutos antes do horário agendado; \n\nCaso tenha implante de marca–passo avisar antes do exame; \n\nNão suspender os medicamentos em uso, exceto se o médico solicitante tenha orientado a suspensão; \n\nVir de banho tomado; \n\nNão usar óleo ou creme no corpo no dia do exame; \n\nNo dia do exame, não usar blusa ou camisa justa (se possível, usar camisa larga); \n\nPara o sexo masculino se possível realizar a retirada de pelos da região torácica; \n\nPaciente menor de 17 anos (11 meses e 29 dias) é obrigatório à presença de um responsável legal para a realização do exame.",
        preco: '80,00',
        imagem: require('../assets/images/eletrocardio.jpg')
    },
    {
        nome: 'Ecocardiograma',
        orientaTitulo: 'Preparo:',
        orientaDetalhes: "Trazer documento com foto, cartão do convênio, pedido médico e guia autorizada pelo convênio(quando necessário); \n\nChegar 15 minutos antes do horário agendado, após 15 minutos de atraso poderá não ser atendido; \n\nPacientes menores de 18 anos ou maiores que 65 anos deverão vir acompanhados de um responsável legal, que deverá permanecer no local até o final do exame; \n\nConferir peso e altura ANTES DE VIR FAZER O EXAME; \n\nTrazer exames cardiológicos recentes (se houver); \n\nNão é necessário jejum para esse exame.",
        preco: '259,00',
        imagem: require('../assets/images/hemo.jpg')
    },
    {
        nome: 'Densitometria Óssea',
        orientaTitulo: 'Preparo:',
        orientaDetalhes: "É preciso suspender os comprimidos de cálcio 24 horas antes do exame; \n\nOs pacientes que realizaram exames radiológicos com contraste deverão aguardar, no mínimo, uma semana para agendar a densitometria óssea; \n\nNo dia do exame, é necessário vestir roupas que não tenham botão ou zíper para facilitar a aquisição da imagem; \n\nEsse exame não é recomendado para mulheres grávidas.",
        preco: '210,00',
        imagem: require('../assets/images/densitometria.jpg')
    },
  ];
  const userData = route.params.userData;
  const docRef = route.params.docRef;
  const existingExams = [];
  exames.forEach((item) => existingExams.push(Object.values(item)[0]));

  async function createAppointment() {
    if(existingExams.includes(nome)) {
        try {
          const userDocRef = doc(db, 'usuarios', docRef);
          const userExamsRef = collection(userDocRef, 'exames');
          const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
          const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
          const generatedID = getRandomLetters(5) + getRandomDigits(5);
          const exam = exames.filter((item) => item['nome'] == nome)[0];

          await addDoc(userExamsRef, {
            id: generatedID,
            titulo: nome,
            data: data,
            hora: hora,
            preco: exam.preco,
            orientaTitulo: exam.orientaTitulo,
            orientaDetalhes: exam.orientaDetalhes,
            imagem: exam.imagem,
          });
          navigation.navigate('Exames', { userData, docRef });
        } catch (e) {
          console.error("Erro adicionando consulta: ", e);
        }
    } else {
        setErro('Esse exame não existe');
    }
  }


  return (
    <>
        <View style={styles.header}>
            <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('Exames', { userData, docRef})}>
                <Icon name='arrow-circle-left' size={20} />
            </TouchableOpacity>
            <Text>Marcando Exame</Text>
        </View>
        <View style={styles.midContainer}>
            <Text>Nome do Exame</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a data aqui'} onChangeText={(text) => {setNome(text)}} />
            <Text>Data</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a data aqui'} onChangeText={(text) => {setData(text)}} />
            <Text>Hora</Text>
            <TextInput style={{marginTop: 12}} placeholder={'Insira a hora aqui'} onChangeText={(text) => {setHora(text)}} />
            <Text style={{color: 'red'}}>{erro}</Text>
        </View>
        <View style={styles.lowContainer}>
            <TouchableOpacity style={styles.button} onPress={createAppointment}>
                <Text style={styles.buttonText}>Marcar</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: StatusBar.currentHeight,
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topContainer: {
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    button: {
        backgroundColor: '#FF3333',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});