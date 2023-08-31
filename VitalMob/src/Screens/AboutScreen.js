// src/screens/AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.description}>
        Este aplicativo de marcação de consultas foi criado para simplificar o processo
        de agendamento de consultas médicas. Oferecemos uma plataforma fácil de usar
        que permite que os pacientes agendem suas consultas de forma conveniente.{"\n"}Integrantes :{"\n"}Andressa Silveira{"\n"} Daniel Mendes{"\n"}Élvis Sousa{"\n"} Jessica Luana{"\n"}Kevin Silva Lopes{"\n"}Marcos Barbosa{"\n"}Vanderson Belfort{"\n"}Pedro Igor{"\n"}Lincon Roberto{"\n"} 
        
      </Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fundo branco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red', // Texto vermelho
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red', // Texto vermelho
  },
});

export default AboutScreen;