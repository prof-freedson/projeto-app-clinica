import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Picker } from '@react-native-picker/picker';
import Carrosel from '../Modules/Carrosel';
import { Linking } from 'react-native';
import { openInbox } from "react-native-email-link";

const MyApi = ({ type }) => {

  const [nomefiliais, setNomeFiliais] = useState([]);
  const [dados, setDados] = useState([]);
  const [selected, setSelected] = useState(0); // Filial inicial selecionada

  const [globalnome, setGlobalNome] = useState({ nome: null, data_criacao: null });
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  // Configurações das Filiais
  const [imgfiliais, setImgFiliais] = useState([]);
  const [mapafiliais, setMapaFiliais] = useState([]);
  const [contactfiliais, setContactFiliais] = useState([]);
  const [horafiliais, setHoraFiliais] = useState([])

  function selectSetFilial(data, selectedFilial) {
    const item_selecionado = data[selectedFilial];

    if (item_selecionado) {
      const globalItem = item_selecionado.dadosFiliais;
      setGlobalNome(globalItem);

      const imgFiliaisData = item_selecionado.imagens || [];
      setImgFiliais(imgFiliaisData);

      const mapaFiliaisData = item_selecionado.mapa || [];
      setMapaFiliais(mapaFiliaisData);

      const infoContatoFiliaisData = item_selecionado.informacoes_contato || [];
      setContactFiliais(infoContatoFiliaisData);

      const horarioFiliaisFuc = item_selecionado.horario_funcionamento || []
      setHoraFiliais(horarioFiliaisFuc)




    } else {
      console.log("Filial selecionada não válida.");
      // Limpe os estados para evitar informações antigas.
      setGlobalNome({ nome: null, data_criacao: null });
      setImgFiliais([]);
      setMapaFiliais([]);
      setContactFiliais([]);
      setHoraFiliais([])
    }
  }

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const header = {
          ip: "192.168.207.152",
          token: "AxBEX85u38diG4ODAHgutrICTNb2",
          Headers: {
            mode: "cors",
            cache: "default"
          }
        }
        const response = await fetch(`http://${header.ip}:3000/Api/dados?token=${header.token}`, header.Headers);
        if (!response.ok) {
          throw new Error("Erro na Conexão Api...");
        }
        const data = await response.json();
        if (type === "select") {
          const nomeFiliais = data.map(filial => filial.dadosFiliais);
          setDados(data);
          setNomeFiliais(nomeFiliais);
          // Defina as informações da primeira filial como globais ao iniciar.
          const globalItem = nomeFiliais[selected];
          setGlobalNome(globalItem);
          const imgFiliaisData = data[selected].imagens || [];
          setImgFiliais(imgFiliaisData);
          const mapaFiliaisData = data[selected].mapa || [];
          setMapaFiliais(mapaFiliaisData);
          const infoContatoFiliaisData = data[selected].informacoes_contato || [];
          setContactFiliais(infoContatoFiliaisData);
          const horarioFiliaisFuc = data[selected].horario_funcionamento || []
          setHoraFiliais(horarioFiliaisFuc)
        }
        // Quando os dados são carregados com sucesso, defina o estado de carregamento como falso.
        setIsLoading(false);
      } catch (error) {
        console.error(`Erro ${error}`);
      }
    };
    fetchApiData();
  }, [type]);

  if (isLoading) {
    // Mostrar o componente de carregamento enquanto os dados estão sendo carregados.
    return (
      <View style={Style.loadingContainer}>
        <Text style={{color:'red',fontWeight:'600'}}>Buscando Dados... 🔍</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={Style.container}>
      <View style={Style.containerBox}>
        <Text style={{ fontSize: 30 }}>Filiais VitalMob</Text>
      </View>
      <View style={Style.containerBox}>
        <Text>Escolha as Filiais Perto de Você</Text>
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue) => {
            setSelected(itemValue);
            selectSetFilial(dados, itemValue); // Passar o índice da filial selecionada
          }}
          mode="dialog"
        >
          {nomefiliais.map((item, index) => (
            <Picker.Item key={index} label={item.nome} value={index} />
          ))}
        </Picker>
      </View>
      <View style={Style.containerBox}>
        <View style={{ width: '100%', height: 180 }}>
          {imgfiliais.map((img, index) => (
            img ? (
              <Carrosel key={index} imgs={Object.values(img)} />
            ) : (
              <Image key={index} source={{ uri: "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/perfil-sem-foto-1024x655.jpg.webp" }} />
            )
          ))}
        </View>
      </View>
      <View style={Style.containerBox}>
        <Text>Localização</Text>
        <View style={{ height: '20%' }}>
          {mapafiliais.map((item, index) => (
            item ? (
              index ? (
                <Text>Index Não Encontrado</Text>
              ) : (
                <MapView
                  key={index}
                  style={Style.maps}
                  initialRegion={{
                    latitude: Number(item.latitude),
                    longitude: Number(item.longitude),
                    latitudeDelta: Number(item.latitudeDelta),
                    longitudeDelta: Number(item.longitudeDelta),
                  }}
                />
              )
            ) : (
              <Text key={index}>Carrgando dados...</Text>
            )
          ))}
        </View>
      </View>
      <View style={Style.containerBox}>
        <View>
          {globalnome.nome === null || globalnome.data_criacao === null ? (
            <View>
              <Text>Informações</Text>
              <Text>Criação</Text>
            </View>
          ) : (
            <View>
              <Text>Informações: {globalnome.nome}</Text>
              <Text>Criação: {globalnome.data_criacao}</Text>
            </View>
          )}
        </View>
        <View style={{ padding: 5 }}>
          <ScrollView style={{ height: 120 }}>
            <Collapse style={Style.Accoddion}>
              <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                <View>
                  <Text>Informações sobre a Filial  <Text style={{ color: 'red' }}>Click !!!</Text></Text>
                </View>
              </CollapseHeader>
              <CollapseBody style={Style.Accoddion.CollapseBody}>
                <ScrollView style={{ height: 170 }} scrollEnabled={true} keyboardShouldPersistTaps={"handled"}>
                  {contactfiliais.map((item, index) => (
                    <View key={index}>
                      <Collapse style={Style.Accoddion}>
                        <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                          <View>
                            <Text><FontAwesome name="phone" size={16} /> Telefone para Contato</Text>
                          </View>
                        </CollapseHeader>
                        <CollapseBody style={Style.Accoddion.CollapseBody}>
                          <Button
                            title={item.telefone}
                            onPress={() => {
                              Linking.openURL(`tel:${item.telefone}`)
                            }}
                          />
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={Style.Accoddion}>
                        <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                          <View>
                            <Text><FontAwesome name="envelope" size={16} /> Email Filial</Text>
                          </View>
                        </CollapseHeader>
                        <CollapseBody style={Style.Accoddion.CollapseBody}>
                          <Button
                            title={item.email}
                            onPress={() => {
                              Linking.openURL(`mailto:${item.email}`)
                            }}
                          />
                        </CollapseBody>
                      </Collapse>
                      <Collapse style={Style.Accoddion}>
                        <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                          <View>
                            <Text><FontAwesome name="globe" size={16} /> Site da Filial</Text>
                          </View>
                        </CollapseHeader>
                        <CollapseBody style={Style.Accoddion.CollapseBody}>
                          <Button
                            title={item.site}
                            onPress={() => {
                              Linking.openURL(item.site)
                            }}
                          />
                        </CollapseBody>
                      </Collapse>
                    </View>
                  ))}
                </ScrollView>
              </CollapseBody>
            </Collapse>
            <Collapse style={Style.Accoddion}>
              <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                <View>
                  <Text>Horarios de Fucionamento  <Text style={{ color: 'red' }}>Click !!!</Text></Text>
                </View>
              </CollapseHeader>
              <CollapseBody style={Style.Accoddion.CollapseBody}>
                <ScrollView style={{ height: 360 }} scrollEnabled={true} keyboardShouldPersistTaps={"handled"}>
                  {horafiliais.map((item, index) => (
                    item?(
                      <View key={index} style={{ borderWidth: 1, borderColor: 'black', }}>
                      <Collapse>
                        <CollapseHeader style={{ backgroundColor: 'red', padding: 10, }}>
                          <View>
                            <Text style={{ color: 'white' }}><FontAwesome name="calendar" size={16} /> Funcionamento </Text>
                          </View>
                        </CollapseHeader>
                        <CollapseBody style={{ backgroundColor: 'white', padding: 7 }}>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>segunda {item.segunda}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>terca   {item.terca}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>quarta  {item.quarta}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>quinta  {item.quinta}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>sexta   {item.sexta}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>sabado  {item.sabado}</Text>
                          <Text style={{ backgroundColor: '#ccc', padding: 10, marginTop: 4 }}>domingo {item.domingo}</Text>
                        </CollapseBody>
                      </Collapse>
                    </View>                      
                    ):(
                      <Text key={index}>Dados Carregando...</Text>
                    )
                  ))}
                </ScrollView>
              </CollapseBody>
            </Collapse>
          </ScrollView>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {contactfiliais.map((item, index) => (
            <TouchableOpacity style={Style.buttonContainer}
              key={index}
              onPress={() =>
                Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                  if (supported) {
                    return Linking.openURL(
                      `whatsapp://send?phone=${item.telefone}&text=oi`
                    );
                  } else {
                    return Linking.openURL(
                      `https://api.whatsapp.com/send?phone=${item.telefone}&text=oi`
                    );
                  }
                })
              }
            >
              <FontAwesome name="whatsapp" size={24} color="white" />
              <Text style={Style.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 5,
    gap: 3,
    backgroundColor: '#fff',
  },
  containerBox: {
    width: '100%',
    padding: 1,
    backgroundColor: '#ccc',
  },
  maps: {
    width: '100%',
    height: 120
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    backgroundColor: '#25D366',
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    marginLeft: 10
  },
  Accoddion: {
    width: '100%',
    Collapse: {
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 5
    },
    CollapseHeader: {
      width: '100%',
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 5
    },
    CollapseBody: {
      width: '100%',
      backgroundColor: '#ccc',
      marginTop: 5,
    }
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default MyApi;
