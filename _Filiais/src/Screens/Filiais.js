
import { Image, View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native"
import Icons from '@expo/vector-icons/FontAwesome'
import React from 'react';
import MapView from 'react-native-maps';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { Picker } from '@react-native-picker/picker';
import Carrosel from '../modules/Carrosel';


const filiais = () => {

    const img = [
        "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/perfil-sem-foto-1024x655.jpg.webp",
        "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/perfil-sem-foto-1024x655.jpg.webp",
        "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/perfil-sem-foto-1024x655.jpg.webp"
    ]

    const caption = [
      "img -01",
      "img -02",
      "img -03"
    ]

    return (
        <View style={Style.container}>
            <View style={Style.containerBox}>
                <View>
                    <Text>Filiais</Text>
                </View>
            </View>
            <View style={Style.containerBox}>
               <View>
                    <Text>Escolha o Local</Text>
               </View>
                <View>
                    <Picker>
                        <Picker.Item label="Filial -1" value={"01"} />
                        <Picker.Item label="Filial -2" value={"02"}/>
                    </Picker>
                </View>
            </View>
            <View style={Style.containerBox}>
                <View style={{ width: '100%' ,height:180}}>
                    <Carrosel
                        imgs={img}
                        captions={caption}
                    />
                </View>
            </View>
            <View style={Style.containerBox}>
                <View>
                    <Text>Map:</Text>
                </View>
                <View style={{ height: '20%' }}>
                    <MapView
                        style={Style.maps}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </View>
            <View style={Style.containerBox}>
                <View>
                    <Text>Info</Text>
                </View>
                <View style={{ padding: 5 }}>
                    <ScrollView style={{height:130}}
                        scrollEnabled={true}
                        keyboardShouldPersistTaps={"handled"}
                    >
                        <Collapse style={Style.Accoddion}>
                            <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                                <View>
                                    <Text>Sobre</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={Style.Accoddion.CollapseBody}>
                                <Text>Informações sobre a Filial</Text>
                            </CollapseBody>

                        </Collapse>
                        <Collapse style={Style.Accoddion}>
                            <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                                <View>
                                    <Text>Site</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={Style.Accoddion.CollapseBody}>
                                <Text>Informações sobre o site</Text>
                            </CollapseBody>
                        </Collapse>
                        <Collapse style={Style.Accoddion}>
                            <CollapseHeader style={Style.Accoddion.CollapseHeader}>
                                <View>
                                    <Text>Contato</Text>
                                </View>
                            </CollapseHeader>
                            <CollapseBody style={Style.Accoddion.CollapseBody}>
                                <Text>Informações sobre o Contato</Text>
                            </CollapseBody>
                        </Collapse>
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}

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
    Accoddion: {
        width: '100%',
        // backgroundColor:'gray',
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
            padding: 10,
            backgroundColor: '#ccc',
            marginTop: 5
        }
    }
})


export default filiais