require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Saldo inicial (exemplo de saldo do usuário)
let saldo = 50.00; // Valor inicial do saldo (pode vir de banco de dados ou sessão)

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));  // Arquivos estáticos (CSS, JS)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    // Passando a variável saldo para o template index.ejs
    res.render('index', {
        title: 'Página Inicial',
        saldo: saldo, // Passando o saldo para o EJS
    });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
