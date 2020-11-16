const mongoose = require('../database');

const ContatoSchema = new mongoose.Schema({
    nome: {
        type:String,
        require: true
    },  
    telefone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require:true,
        lowercase: true
    }
})

const Contato = mongoose.model('Contato', ContatoSchema);

module.exports = Contato; 