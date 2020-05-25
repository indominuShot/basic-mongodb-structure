const mongoose = require('mongoose');

const Exemplo = new mongoose.Schema({
    campo1: String,
    campo2: Number,
    campo3: Boolean
});

module.exports = mongoose.model('Nome da tabela', Exemplo);