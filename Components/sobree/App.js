import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Platform } from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>   
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL(
              'https://about.google/'
            );
          }}>
          Visite o Site
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            if (Platform.OS === 'android') {
              Linking.openURL(
                'http://maps.apple.com/?ll=-23.5864258,-46.684084'
              );
            } else {
              Linking.openURL(
                'geo:-23.5864258,-46.684084'
              );
            }
          }}>
          Como Chegar
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5519999999999'
            );
          }}>
          Enviar Mensagem
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL(
              'mailto:contato@google.com.br'
            );
          }}>
          Enviar Email
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor : 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 25,
  },
})

