// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Configura EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados de formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Variáveis temporárias de saldo e avaliações disponíveis
let saldo = 35.00;
let avaliacoesDisponiveis = 15;

// Rota da plataforma (única página pública)
app.get('/plataforma', (req, res) => {
    res.render('plataforma', { title: 'Plataforma', saldo, avaliacoesDisponiveis });
});

// Rota para processar avaliação
app.post('/avaliar', (req, res) => {
    if (avaliacoesDisponiveis > 0) {
        const valorAvaliado = (Math.random() * (55 - 25) + 25).toFixed(2);
        saldo += parseFloat(valorAvaliado);
        avaliacoesDisponiveis--;
        return res.redirect('/plataforma');
    } else {
        return res.send('Você atingiu o limite de avaliações diárias!');
    }
});

// Redireciona qualquer página não definida para a página da plataforma
app.get('*', (req, res) => {
    res.redirect('/plataforma');  // Forçar redirecionamento para a plataforma
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
