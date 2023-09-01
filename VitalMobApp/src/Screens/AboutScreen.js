import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const AboutScreen = () => {
  const contributors = [
    {
      name: 'Andressa Silveira',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Élvis Sousa',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Jessica Luana',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Kevin Silva Lopes',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Marcos Barbosa',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Vanderson Belfort',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Pedro Igor',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Lincon Roberto',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
    {
      name: 'Daniel Mendes && Fernanda',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
      github: 'https://github.com/',
    },
  ];

  const [selectedContributorIndex, setSelectedContributorIndex] = useState(-1);

  const handleCardPress = (index) => {
    setSelectedContributorIndex(index === selectedContributorIndex ? -1 : index);
  };

  return (
    <ScrollView>
      <Animatable.Text
        animation="fadeInDown"
        duration={1500}
        style={styles.projectTitle}
      >
        Contribuidores do Projeto
      </Animatable.Text>
      {/* Adicione o texto "Sobre o Aplicativo" abaixo */}
      <Animatable.Text
        animation="fadeInDown"
        duration={1500}
        style={styles.aboutText}
      >
        Este aplicativo de marcação de consultas foi criado para simplificar o processo
        de agendamento de consultas médicas. Oferecemos uma plataforma fácil de usar
        que permite que os pacientes agendem suas consultas de forma conveniente.

      </Animatable.Text>
      {/* Fim do texto "Sobre o Aplicativo" */}
      {contributors.map((contributor, index) => (
        <TouchableOpacity key={index} onPress={() => handleCardPress(index)}>
          <Animatable.View
            animation="fadeInUp"
            delay={index * 200}
            style={styles.contributorContainer}
          >
            <Image source={{ uri: contributor.imageUri }} style={styles.contributorImage} />
            <Text style={styles.contributorName}>{contributor.name}</Text>
            {selectedContributorIndex === index && (
              <View style={styles.detailsContainer}>
                <Text style={styles.githubText}>{contributor.github}</Text>
                <Icon name="github" size={30} color="black" />
              </View>
            )}
          </Animatable.View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  contributorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  contributorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  contributorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  detailsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  githubText: {
    fontSize: 16,
    color: 'black',
    marginRight: 5,
  },
});

export default AboutScreen;