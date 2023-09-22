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

        if (username === account_conta && password === password_conta && token === token_conta) {
          // Se as credenciais forem válidas, redirecione para a página '/Api'
          userFound = true;
          res.redirect(`/Api?token=${token}`);
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

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
