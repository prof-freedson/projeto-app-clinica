# 🏥💉 Aplicativo da Clínica Médica
<img src="./_Logo/App.png" alt="drawing" width="500" style="margin:0 auto;"/>
## Índice

- <a href="funcionalidades">Funcionalidades</a>
- <a href="screens">Screens</a>
- <a href="desenvolvimento">Desenvolvimento Colaborativo</a>
- <a href="demonstracao">Demonstração</a>

## 🛠️ Funcionalidades

### Consultas 🩺

Os clientes ou pacientes poderão agendar **consultas**, escolhendo data, horário e especialidade médica (clínico geral, ortopedista, fisioterapeuta, cardiologista, etc.). A tela de consultas exibirá as consultas agendadas.

### Exames 💉

Os clientes ou pacientes poderão agendar **exames**, escolhendo data, horário e tipo de exame médico (hemograma, ultrassonografia, eletrocardiograma, etc.). A tela de exames exibirá os exames agendados.

### Autenticação e Dados 📊

O aplicativo será desenvolvido com o framework **React Native**, com suporte à navegação entre telas usando **Stack**, **BottomTab** ou **Drawer**. A autenticação será feita usando o serviço **Google Firebase**, incluindo autenticação por e-mail e senha. O uso de outras opções de login (Google, Facebook, etc.) será opcional.

### Layout e Estilo 🎨

O layout será baseado em um dos layouts em anexo, incluindo escolha de fontes, imagens e cores que se aproximem do layout escolhido.

### Sobre o Aplicativo 📄

A tela "Sobre o Aplicativo" conterá a lista dos nomes completos dos alunos participantes do projeto, juntamente com um ícone do **GitHub** que direciona o usuário à página do projeto no **GitHub**.

## 📱 Screens
1. **Splash Screen** 🌟
2. **Cadastro** 📝
3. **Login** 🔑
4. **Início** 🏠
5. **Consultas** 👩‍⚕️📅
6. **Exames** 🩺📋
7. **Sobre o Aplicativo** ℹ️

## 👥 Desenvolvimento Colaborativo

O projeto será desenvolvido de forma colaborativa e versionado no **GitHub**, conforme as orientações do professor. Todos os alunos participantes estarão envolvidos na modelagem e implementação das funcionalidades do aplicativo.

## 📽️ Demonstração

Após o desenvolvimento e testes, será realizada uma demonstração das seguintes tarefas com o acompanhamento dos registros no **Google Firebase**:

- Realização de **cadastro**
- Realização de **login**
- Marcação de **consulta**
- Marcação de **exame**

![Demonstração](https://github.com/prof-freedson/projeto-app-clinica/blob/main/Logos/Logo.png?raw=true)

---
markdown
Copy code
# Guia de Instalação e Uso de Módulos para Desenvolvimento React Native

Este guia fornece instruções para a instalação e uso de vários módulos e bibliotecas populares no desenvolvimento de aplicativos React Native. Certifique-se de seguir os passos abaixo para configurar seu ambiente de desenvolvimento.

## Módulos Necessários

Antes de começar, certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.

- [Node.js](https://nodejs.org/) (versão recomendada)
- npm (normalmente vem com o Node.js)

## Node modules (Instalação)

```bash
npm install @react-navigation/native @react-navigation/stack
Firebase e Firebase Auth
O Firebase é uma plataforma de desenvolvimento de aplicativos que oferece uma variedade de serviços, incluindo autenticação de usuário.

npm install firebase
Firebase Firestore
O Firebase Firestore é um banco de dados NoSQL em tempo real fornecido pelo Firebase.

npm install @react-native-firebase/app @react-native-firebase/firestore
Switch Toggle
O React Native Switch é uma interface de alternância que pode ser usada para opções binárias.


npm install @react-native-community/switch
Expo SVG
Expo SVG permite a renderização de gráficos vetoriais escaláveis (SVG) em aplicativos Expo.

npm install react-native-svg
Configuração do Projeto
Certifique-se de que seu projeto React Native esteja configurado adequadamente para suportar esses módulos. Siga as documentações oficiais para cada módulo para integrá-los ao seu projeto.
```
## Tecnologias Utilizadas

1.[React Native](https://reactnative.dev/)<br>
2.[Expo](https://expo.dev/)<br>
3.[Google Firebase](https://firebase.google.com/?hl=pt)
