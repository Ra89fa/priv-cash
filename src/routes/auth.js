const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Certifique-se de que o modelo de Usuário está configurado corretamente

// Rota de Cadastro
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(400).send("Erro ao cadastrar usuário.");
    }
});

// Rota de Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && await user.comparePassword(password)) {
        res.redirect('/dashboard');
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

module.exports = router;
