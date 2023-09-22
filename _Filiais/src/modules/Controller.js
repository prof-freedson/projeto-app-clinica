import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';

const myApi = ({ type }) => {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    const Headeres = {
      mode: "cors",
      cache: "default",
    };

    fetch('http://192.168.207.152:3000/Api/dados?token=AxBEX85u38diG4ODAHgutrICTNb2', Headeres)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na Conexão Api...");
        }
        return response.json();
      })
      .then((dados) => {
        class Components {
          constructor(dados, method) {
            this.method = method;
            this._dados = dados;
          }

          screenRender() {
            if (this.method === "select") {
              const dadosFiliais = this._dados.dadosFiliais;
              const nome = dadosFiliais.nome;
              setNome(nome);
            }
          }

          renderFetch() {
            if (this._dados) {
              this.screenRender();
            } else {
              console.log("Dados não existem");
            }
          }
        }

        // Construção de métodos
        const picker = new Components(dados[0], type);
        picker.renderFetch();
      })
      .catch((erro) => {
        console.error(`Erro ${erro}`);
      });
  }, [type]);

  return (
    <View>
    </View>
  );
};

export default myApi;