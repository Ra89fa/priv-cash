const mongoose = require('mongoose');

// Criando o modelo de Avaliação
const avaliacaoSchema = new mongoose.Schema({
    fotoId: { type: Number, required: true },
    nivelDeSafadeza: { type: String, required: true },  // Ótima, Média, Pouca
    data: { type: Date, default: Date.now },  // Data da avaliação
});

module.exports = mongoose.model('Avaliacao', avaliacaoSchema);
