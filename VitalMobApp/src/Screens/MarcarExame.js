import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput,ScrollView  } from 'react-native';
import { db } from '../../firebaseConfig';
import { addDoc, doc, collection } from "@firebase/firestore";
import Icon from '../components/Icon';
import { Picker } from '@react-native-picker/picker';

export default function Inicio({ navigation, route }) {
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [erro, setErro] = useState("");
    const [selectedExame, setSelectedExame] = useState(null);
    const [showDates, setShowDates] = useState(false);
    const [filteExames, setFilteExames] = useState(exames);
    const [searchText, setSearchText] = useState('');
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
      imagem: require('../assets/images/ecocardio.jpg')
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

  const filterExames = () => {
    const filtered = exames.filter((item) =>
      item.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteExames(filtered);
  };

  async function createAppointment() {
    setSelectedExame(nome)

    // console.log(selectedExame)

    if (selectedExame) {
      try {
        const userDocRef = doc(db, 'usuarios', docRef);
        const userExamsRef = collection(userDocRef, 'exames');
        const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
        const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
        const generatedID = getRandomLetters(5) + getRandomDigits(5);
        const exam = exames.find(item => item.nome === selectedExame);

        await addDoc(userExamsRef, {
          id: generatedID,
          titulo: selectedExame,
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
      setErro('Por favor, selecione um exame');
    }
  }


  const filteredExames = exames.filter((item) =>
    item.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Exames', { userData, docRef })}>
        <Icon style={styles.headerIcon} name='arrow-left' size={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Marcando Exame</Text>
    </View>
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Selecione um Exame</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar exame..."
        onChangeText={(text) => {
          setSearchText(text);
          filterExames();
        }}
        value={searchText}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={nome}
          onValueChange={(itemValue) => setNome(itemValue)}
          style={styles.picker}
        >
          {filteredExames.map((item) => (
            <Picker.Item key={item.nome} label={item.nome} value={item.nome} />
          ))}
        </Picker>
      </View>
      <Text style={styles.label}>Data (DD/MM/AAAA)</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a data aqui"
        onChangeText={(text) => {
          // Filtro para permitir apenas números, barras e até 10 caracteres
          const filteredText = text.replace(/[^0-9/]/g, '').slice(0, 10);
          setData(filteredText);
        }}
        value={data}
      />
      <Text style={styles.label}>Hora</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a hora aqui"
        onChangeText={(text) => setHora(text)}
        value={hora}
      />
      <Text style={styles.errorText}>{erro}</Text>
    </ScrollView>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={createAppointment}>
        <Text style={styles.buttonText}>Marcar</Text>
      </TouchableOpacity>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      gap:10,
      backgroundColor: '#DD242C', // Cor de fundo do cabeçalho
    },
    dateContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap:20
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ecf0f1', // Cor de fundo do conteúdo
      height:100
    },
    label: {
      fontSize: 16,
      margin:10,
      color: '#333', // Cor do texto do rótulo
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      marginBottom: 10,
    },
    picker: {
      height: 40,
      width: '100%',
      backgroundColor: '#fff', // Cor de fundo do seletor
      borderColor: '#DD242C', // Cor da borda do seletor
    },
    input: {
      height: 40,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: '#fff', // Cor de fundo do campo de entrada
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    button: {
      backgroundColor: '#DD242C', // Cor de fundo do botão
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 4,
    },
    buttonText: {
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
  });