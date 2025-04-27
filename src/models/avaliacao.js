const mongoose = require('mongoose');

const avaliacaoSchema = new mongoose.Schema({
    fotoId: { type: Number, required: true },
    nivelDeSafadeza: { type: String, required: true },
    data: { type: Date, default: Date.now },
});

const Avaliacao = mongoose.model('Avaliacao', avaliacaoSchema);

module.exports = Avaliacao;
