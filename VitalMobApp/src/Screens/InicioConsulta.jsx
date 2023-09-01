
import { formToJSON } from 'axios';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const InicioConsulta = ({ navigation, route }) => {
  const userData = route.params.userData;
  const docRef = route.params.docRef;

  const goToAppointmentScreen = () => {
    navigation.navigate('Consulta', { userData, docRef }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especialidades Médicas Oferecidas Pelo APP</Text>

        <View style={styles.cartao}>
        <Image source={require('../assets/images/pediatria.jpg')}
               style={{height:100, width: 100 }}
              />
        <View style={styles.tituloP}>
                <Text style={{ fontWeight: 'bold', color : 'red', fontSize: 20, paddingTop: 5 }} >Pediatria</Text>
                <Text style={{height:50, fontSize:12, marginTop:1,} }>Especialidade da Medicina dedicada
                 ao cuidado da saúde de crianças, pré-adolescente e adolescentes</Text>
                 
            </View>
        </View>
        <View style={styles.cartao}>
          <Image source={require('../assets/images/clinico-geral.webp')}
               style={{height:100, width: 100 }}
              />
               
            <View style={styles.tituloC}>
              
                <Text style={{ fontWeight: 'bold', color : 'red', fontSize: 20 }} >Clinico Geral</Text>
                <Text style={{height:70, fontSize:12, marginTop:1, }  }>Especialidade médica que trata de pacientes adultos fazendo um diagnóstico
                 de diversas doenças que não sejam cirúrgicas, obstétricas e ginecológicas.</Text>
            </View>
        </View>
        <View style={styles.cartao}>
        <Image source={require('../assets/images/odontologia.jpeg')}
               style={{height:100, width: 100 }}
              />
            <View style={styles.tituloO}>
                <Text style={{ fontWeight: 'bold', color : 'red', fontSize: 20 }} >Odontologia</Text>
                <Text style={{height:70, fontSize:12, marginTop:1,} }>Especialidade da Medicina que atua na prevenção, diagnóstico e tratamento de problemas
                 relacionados aos dentes, boca, língua, gengiva, ossos da face e do pescoço.</Text>
            </View>
        </View>
        <View style={styles.cartao}>
        <Image source={require('../assets/images/geriatria.jpg')}
               style={{height:100, width: 100 }}
              />
            <View style={styles.tituloG}>
                <Text style={{ fontWeight: 'bold', color : 'red',fontSize: 20 }} >Geriatria</Text>
                <Text style={{height:70, fontSize:12, marginTop:1,}}>Campo médico que une Gerontologia, saúde, prevenção/tratamento de doenças, reabilitação e cuidados paliativos em idosos.{'\n'}
                 </Text>
            </View>
        </View>


      <TouchableOpacity
        style={styles.button}
        onPress={goToAppointmentScreen}
      >
        <Text style={styles.buttonText}>Marcar Consulta</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding:25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  button: {
    backgroundColor: '#d0252d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartao: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,

    
    
    
},
tituloP: {
  width: 200,
  height: 30,
  borderRadius:5,
  margin:8,
  
  
},
tituloC: {
  width: 210,
  height: 50,
  borderRadius:5,
  marginLeft:8
  
  
  
  
},
tituloO: {
  width: 210,
  height: 45,
  borderRadius:5,
  marginLeft:8
  
  
},
tituloG: {
  width: 210,
  height: 40,
  borderRadius:5,
  margin:5,
  
  
},
img:{
  flex:2,
  alignItems:'flex-end',
  justifyContent:'flex-end'

}

});

export default InicioConsulta;