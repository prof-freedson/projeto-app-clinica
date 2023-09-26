const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const admin = require('firebase-admin');

const app = express();
const port = 3000;

// Inicialize o Firebase Admin SDK com a chave de serviço
var serviceAccount = require("./Data/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const userCollection = db.collection('usuarios');


const filiaisCollection = db.collection('filiais');

// filiaisCollection.get()
//   .then(dados => {
//     dados.forEach(doc => {
//       const dadosFiliais = doc.data();
//       console.log("Dados da coleção 'filiais':", dadosFiliais);

//       // Agora, você pode acessar subcoleções se elas estiverem presentes nos dados do documento.
//       // Vamos supor que há uma subcoleção chamada "funcionarios" em cada documento.

//       const mapaCollection = doc.ref.collection('mapa');

//       mapaCollection.get()
//         .then(mapaDados => {
//           mapaDados.forEach(mapaDoc => {
//             const dadosMapa = mapaDoc.data();
//             console.log("Dados da subcoleção 'Mapa':", dadosMapa);
//           });
//         })

//       const informacoes_contato = doc.ref.collection('informacoes_contato');

//       informacoes_contato.get()
//         .then(contatosDados => {
//           contatosDados.forEach(contatoDoc => {
//             const dadoscontatos = contatoDoc.data();
//             console.log("Dados da subcoleção 'Mapa':", dadoscontatos);
//           });
//         })

//       const imagens = doc.ref.collection('imagens');
//       imagens.get()
//         .then(imgDados => {
//           imgDados.forEach(imgDoc => {
//             const dadosimg = imgDoc.data();
//             console.log("Dados da subcoleção 'Mapa':", dadosimg);
//           });
//         })

//       const horario_funcionamento = doc.ref.collection('horario_funcionamento');

//       horario_funcionamento.get()
//         .then(horaDados => {
//           horaDados.forEach(horaDoc => {
//             const dadoshora = horaDoc.data();
//             console.log("Dados da subcoleção 'Mapa':", dadoshora);
//           });
//         })

//     });
//   })
//   .catch(error => {
//     console.error("Erro ao obter dados da coleção 'filiais':", error);
//   });

app.get('/Api/dados', (req, res) => {
  const token_formulario = req.query.token;

  userCollection.get()
    .then(snapshot => {
      let tokenValido = false;
      const promises = [];

      snapshot.forEach(doc => {
        const dados = doc.data();
        const token_conta = dados.userId;

        if (token_formulario === token_conta) {
          tokenValido = true;

          const filiaisData = [];
          const mapaPromises = [];
          const informacoesContatoPromises = [];
          const imagensPromises = [];
          const horarioFuncionamentoPromises = [];

          filiaisCollection.get()
            .then(filiaisSnapshot => {
              filiaisSnapshot.forEach(filiaisDoc => {
                const dadosFiliais = filiaisDoc.data();

                const mapaCollection = filiaisDoc.ref.collection('mapa');
                const mapaPromise = mapaCollection.get()
                  .then(mapaSnapshot => {
                    const Mapa = [];
                    mapaSnapshot.forEach(mapaDoc => {
                      const dadosMapa = mapaDoc.data();
                      Mapa.push(dadosMapa);
                    });
                    return Mapa;
                  })
                  .catch(error => {
                    console.error("Erro ao obter dados da subcoleção 'mapa':", error);
                    return [];
                  });

                const informacoesContatoCollection = filiaisDoc.ref.collection('informacoes_contato');
                const informacoesContatoPromise = informacoesContatoCollection.get()
                  .then(contatosSnapshot => {
                    const informacoesContato = [];
                    contatosSnapshot.forEach(contatoDoc => {
                      const dadoscontatos = contatoDoc.data();
                      informacoesContato.push(dadoscontatos);
                    });
                    return informacoesContato;
                  })
                  .catch(error => {
                    console.error("Erro ao obter dados da subcoleção 'informacoes_contato':", error);
                    return [];
                  });

                const imagensCollection = filiaisDoc.ref.collection('imagens');
                const imagensPromise = imagensCollection.get()
                  .then(imgSnapshot => {
                    const imagens = [];
                    imgSnapshot.forEach(imgDoc => {
                      const dadosimg = imgDoc.data();
                      imagens.push(dadosimg);
                    });
                    return imagens;
                  })
                  .catch(error => {
                    console.error("Erro ao obter dados da subcoleção 'imagens':", error);
                    return [];
                  });

                const horarioFuncionamentoCollection = filiaisDoc.ref.collection('horario_funcionamento');
                const horarioFuncionamentoPromise = horarioFuncionamentoCollection.get()
                  .then(horaSnapshot => {
                    const horarioFuncionamento = [];
                    horaSnapshot.forEach(horaDoc => {
                      const dadoshora = horaDoc.data();
                      horarioFuncionamento.push(dadoshora);
                    });
                    return horarioFuncionamento;
                  })
                  .catch(error => {
                    console.error("Erro ao obter dados da subcoleção 'horario_funcionamento':", error);
                    return [];
                  });

                mapaPromises.push(mapaPromise);
                informacoesContatoPromises.push(informacoesContatoPromise);
                imagensPromises.push(imagensPromise);
                horarioFuncionamentoPromises.push(horarioFuncionamentoPromise);

                const filialData = {
                  dadosFiliais: dadosFiliais,
                  status: 'success',
                  message: 'Dados recuperados com sucesso',
                };
                filiaisData.push(filialData);
              });

              // Espera todas as promessas serem resolvidas antes de enviar a resposta
              Promise.all([
                Promise.all(mapaPromises),
                Promise.all(informacoesContatoPromises),
                Promise.all(imagensPromises),
                Promise.all(horarioFuncionamentoPromises)
              ])
                .then(([mapaData, informacoesContatoData, imagensData, horarioFuncionamentoData]) => {
                  filiaisData.forEach((filialData, index) => {
                    filialData.mapa = mapaData[index];
                    filialData.informacoes_contato = informacoesContatoData[index];
                    filialData.imagens = imagensData[index];
                    filialData.horario_funcionamento = horarioFuncionamentoData[index];
                  });
                  const formattedJSON = JSON.stringify(filiaisData, null, 2);
                  res.setHeader('Content-Type', 'application/json');
                  res.send(formattedJSON);
                })
                .catch(error => {
                  console.error("Erro ao obter dados de todas as subcoleções:", error);
                  res.status(500).json({ error: 'Erro ao obter dados' });
                });
            })
            .catch(error => {
              console.error("Erro ao obter dados da coleção 'filiais':", error);
              res.status(500).json({ error: 'Erro ao obter dados' });
            });

          promises.push(mapaPromises);
          promises.push(informacoesContatoPromises);
          promises.push(imagensPromises);
          promises.push(horarioFuncionamentoPromises);
        }
      });

      if (!tokenValido) {
        res.sendFile(path.join(__dirname, '/../Public', 'Erro405.html'));
      }
    })
    .catch(error => {
      console.error('Erro ao obter documentos da coleção:', error);
      res.send("Erro");
    });
});

// Configuração do Body Parser para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos na pasta 'public'
app.use(express.static('public'));

// Rota para a página de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/../Public', 'Login.html'));
});

app.get('/', (req, res) => {
  res.send(
    `<div>
      <h1>Menu Api</h1>
      <a href='/login'>Fazer Login</a>
      <br />  
      <br />
      <a href='/sobre'>Sobre Api</a>  
    </div>`
  )
});

app.get('/sobre', (req, res) => {
  res.send(
    `<div>
      <p>Sobre a VitalMob</p> 
      <a href='/'>home</a>  
    </div>`
  )
});

app.get('/Api', (req, res) => {
  const token_formulario = req.query.token;

  userCollection.get()
    .then(snapshot => {
      let tokenValido = false;

      snapshot.forEach(doc => {
        const dados = doc.data();
        const token_conta = dados.userId;

        if (token_formulario === token_conta) {
          tokenValido = true;
          res.sendFile(path.join(__dirname, '/../Public', 'Painel.html'));
        }
      });

      if (!tokenValido) {
        res.sendFile(path.join(__dirname, '/../Public', 'Erro405.html'));
      }
    })
    .catch(error => {
      console.error('Erro ao obter documentos da coleção:', error);
      res.send("Erro");
    });
});

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = req.body.token;

  // Consulte a coleção 'users' no Firestore
  userCollection.get()
    .then(snapshot => {
      let userFound = false;

      snapshot.forEach(doc => {
        const dados = doc.data();
        const account_conta = dados.email;
        const password_conta = dados.senha;
        const token_conta = dados.userId;


        // usar Token && token === token_conta
        if (username === account_conta && password === password_conta) {
          // Se as credenciais forem válidas, redirecione para a página '/Api'
          userFound = true;
          res.redirect(`/Api?token=${token_conta}`);
        }
      });

      // Se nenhum usuário com credenciais correspondentes for encontrado, retorne à página de login
      if (!userFound) {
        res.sendFile(path.join(__dirname, '/../Public', 'Erro405.html'));
      }
    })
    .catch(error => {
      console.error('Erro ao obter documentos da coleção:', error);
      res.redirect('/login?error=Dados');
    });
});

userCollection.get()
.then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const idDocumento = doc.data();
    console.log(idDocumento)
  });
})

// const filiaisCollectionPost = db.collection('filiais');

// constroller = 0
// function criarTestFiliais() {
//   return constroller
// }

// if (criarTestFiliais() === 1) {
//   const dadosFiliais = {
//     nome: 'filial-C',
//     data_criacao: "20-09-2015"
//     // Adicione outros campos conforme necessário
//   };

//   // Use o método add() para criar um novo documento dentro da coleção "filiais"
//   filiaisCollectionPost.add(dadosFiliais)
//     .then((docRef) => {

//       const imagens = {
//         "img-1": "http://img.png",
//         "img-2": "http://img.png",
//         "img-3": "http://img.png"
//       };

//       const horario_funcionamento = {
//         domingo: "fechado",
//         quarta: "9:00 - 18:00",
//         quinta: "9:00 - 18:00",
//         sabado: "fechado",
//         segunda: "9:00 - 18:00",
//         sexta: "9:00 - 18:00",
//         terca: "9:00 - 18:00",
//       };

//       const informacoes_contato = {
//         email: "filiala@example.com",
//         link_contato: "https://example.com/",
//         telefone: "+1 123-456-7890"
//       };

//       const mapa = {
//         latitude: 37.78825,
//         latitudeDelta: 0.0922,
//         longitude: -122.4324,
//         longitudeDelta: 0.0421,
//       };

//       // Agora, você pode criar os documentos dentro das subcoleções
//       docRef.collection("imagens").add(imagens)
//         .then((imagensDocRef) => {
//           console.log('Documento de Imagens criado com sucesso', imagensDocRef.id);
//         })
//         .catch((error) => {
//           console.error('Erro ao criar documento de Imagens:', error);
//         });

//       docRef.collection("horario_funcionamento").add(horario_funcionamento)
//         .then((horarioDocRef) => {
//           console.log('Documento de Horario_Funcionamento criado com sucesso', horarioDocRef.id);
//         })
//         .catch((error) => {
//           console.error('Erro ao criar documento de Horario_Funcionamento:', error);
//         });

//       docRef.collection("informacoes_contato").add(informacoes_contato)
//         .then((contatoDocRef) => {
//           console.log('Documento de Informacoes_Contato criado com sucesso', contatoDocRef.id);
//         })
//         .catch((error) => {
//           console.error('Erro ao criar documento de Informacoes_Contato:', error);
//         });

//       docRef.collection("mapa").add(mapa)
//         .then((mapaDocRef) => {
//           console.log('Documento de Mapa criado com sucesso', mapaDocRef.id);
//         })
//         .catch((error) => {
//           console.error('Erro ao criar documento de Mapa:', error);
//         });
//     })
//     .catch((error) => {
//       console.error('Erro ao criar novo documento:', error);
//     });

// }


const filiaisCollectionPost = db.collection('filiais');
app.post('/cadastrofiliais', (req, res) => {
  const nome = req.body.nome;
  const dataCriacao = req.body.dataCriacao;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const latitudeDelta = req.body.latitudeDelta;
  const longitudeDelta = req.body.longitudeDelta;
  const site = req.body.site;
  const linkContato = req.body.linkContato
  const imagem1 = req.body.imagem1;
  const imagem2 = req.body.imagem2;
  const imagem3 = req.body.imagem3;
  const segunda = req.body.segunda === 'on'; // Se o checkbox estiver marcado, será 'on', caso contrário, undefined
  const terca = req.body.terca === 'on';
  const quarta = req.body.quarta === 'on';
  const quinta = req.body.quinta === 'on';
  const sexta = req.body.sexta === 'on';
  const horainico = req.body.horaincio
  const horafinal = req.body.horafinal

  const dadosFiliais = {
    nome: nome,
    data_criacao: dataCriacao
    // Adicione outros campos conforme necessário
  };

  // Use o método add() para criar um novo documento dentro da coleção "filiais"
  filiaisCollectionPost.add(dadosFiliais)
    .then((docRef) => {

      const imagens = {
        "img_1": imagem1,
        "img_2": imagem2,
        "img_3": imagem3
      };

      const horario_funcionamento = {
        segunda: `${horainico} ${horafinal}`,
        terca: `${horainico} ${horafinal}`,
        quarta: `${horainico} ${horafinal}`,
        quinta: `${horainico} ${horafinal}`,
        sexta: `${horainico} ${horafinal}`,
        sabado: "fechado",
        domingo: "fechado",
      };



      const informacoes_contato = {
        email: email,
        link_contato: `https://api.whatsapp.com/send?phone=${linkContato}`,
        telefone: telefone,
        site: site
      };

      const mapa = {
        latitude: latitude,
        latitudeDelta: latitudeDelta,
        longitude: longitude,
        longitudeDelta: longitudeDelta,
      };

      // Agora, você pode criar os documentos dentro das subcoleções
      docRef.collection("imagens").add(imagens)
        .then((imagensDocRef) => {
          console.log('Documento de Imagens criado com sucesso', imagensDocRef.id);
        })
        .catch((error) => {
          console.error('Erro ao criar documento de Imagens:', error);
        });

      docRef.collection("horario_funcionamento").add(horario_funcionamento)
        .then((horarioDocRef) => {
          console.log('Documento de Horario_Funcionamento criado com sucesso', horarioDocRef.id);
        })
        .catch((error) => {
          console.error('Erro ao criar documento de Horario_Funcionamento:', error);
        });

      docRef.collection("informacoes_contato").add(informacoes_contato)
        .then((contatoDocRef) => {
          console.log('Documento de Informacoes_Contato criado com sucesso', contatoDocRef.id);
        })
        .catch((error) => {
          console.error('Erro ao criar documento de Informacoes_Contato:', error);
        });

      docRef.collection("mapa").add(mapa)
        .then((mapaDocRef) => {
          console.log('Documento de Mapa criado com sucesso', mapaDocRef.id);
        })
        .catch((error) => {
          console.error('Erro ao criar documento de Mapa:', error);
        });
    })
    .catch((error) => {
      console.error('Erro ao criar novo documento:', error);
    });


  // Se desejar, você pode imprimir esses valores para depuração:
  console.log("Nome:", nome);
  console.log("Data de Criação:", dataCriacao);
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  console.log("E-mail:", email);
  console.log("Telefone:", telefone);
  console.log("Latitude Delta:", latitudeDelta);
  console.log("Longitude Delta:", longitudeDelta);
  console.log("Site:", site);
  console.log("Imagem:", imagem1);
  console.log("Segunda-feira:", segunda);
  console.log("Terça-feira:", terca);
  console.log("Quarta-feira:", quarta);
  console.log("Quinta-feira:", quinta);
  console.log("Sexta-feira:", sexta);

  // Retorne uma resposta para o cliente, se necessário
  res.send("Dados recebidos com sucesso!"); // Você pode personalizar a mensagem de resposta conforme necessário.
});
app.get('/doc', (req, res) => {
  const token_formulario = req.query.token;

  userCollection.get()
    .then((snapshot) => {
      let tokenValido = false;

      snapshot.forEach((doc) => {
        const dados = doc.data();
        const token_conta = dados.userId;

        if (token_formulario === token_conta) {
          tokenValido = true;

          // Consulte os documentos da coleção 'filiais' e crie um array com os dados
          const dadosFiliais = [];
          filiaisCollection.get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const idDocumento = doc.id;
                const dadosDocumento = doc.data();

                dadosFiliais.push({ id: idDocumento, ...dadosDocumento });
              });
              res.status(200).json(dadosFiliais); // Envie os dados como resposta JSON
            })
            .catch((error) => {
              console.error('Erro ao buscar documentos da coleção filiais:', error);
              res.status(500).send('Erro ao buscar documentos da coleção filiais.');
            });
        }
      });

      if (!tokenValido) {
        res.sendFile(path.join(__dirname, '/../Public', 'Erro405.html'));
      }
    })
    .catch((error) => {
      console.error('Erro ao obter documentos da coleção "users":', error);
      res.status(500).send('Erro ao obter documentos da coleção "users".');
    });
});

app.delete('/delete/:id', (req, res) => {
  const idDocumentoParaApagar = req.params.id;

  filiaisCollection.doc(idDocumentoParaApagar).delete()
    .then(() => {
      console.log(`Documento com ID ${idDocumentoParaApagar} apagado com sucesso.`);
      res.status(200).json({ message: `Documento com ID ${idDocumentoParaApagar} apagado com sucesso.` });
    })
    .catch((error) => {
      console.error('Erro ao apagar o documento:', error);
      res.status(500).json({ error: 'Erro ao apagar o documento.' });
    });
});
// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
