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
const userCollection = db.collection('users');

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
        const token_conta = dados.token;

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
        const account_conta = dados.Conta;
        const password_conta = dados.senha_conta;
        const token_conta = dados.token;

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
