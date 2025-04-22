const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Definindo o saldo (isso pode vir de um banco de dados ou variável de sessão)
    const saldo = 1000; // Exemplo de saldo
    // Passando o saldo para a view 'index.ejs'
    res.render('index', { saldo }); // Passando a variável 'saldo' corretamente para a view
});

module.exports = router;
