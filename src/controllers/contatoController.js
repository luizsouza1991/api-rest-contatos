const express = require('express')

const Contato = require('../models/contato');

const router = express.Router();

router.get('/contatos', async(req, res) => {
    try {
        const contatos = await Contato.find();

        return res.send({ contatos })
    } catch(err) {
        res.status(400).send({error: "Falha ao buscar contatos"})
    }
});

router.get('/contato/:id/edit', async(req, res) => {
    try{
        const contato = await Contato.findById(req.params.id)
        return res.send({ contato })
    } catch (err) {
        res.status(400).send({error: 'Falha ao buscar contato'})
    }
})

router.put('/contato/update/:id', async(req, res) => {
    try {
        const contato = await Contato.findOneAndUpdate({ _id: req.params.id}, req.body)

        return res.send({ contato: contato })
    } catch (err) {
        res.status(400).send({error: err})
    }
})

router.post('/contato', async(req, res) => {
    try {
        const contato = await Contato.create(req.body);

        return res.send(contato)
    } catch(err) {
        res.status(400).send({error: err})
    }
});

router.delete('/contato/:id', async(req, res) => {
    try {
        const contato = await Contato.findOneAndDelete({ _id:req.params.id });
        
        return res.send({
            status: true
        })
    } catch (err) {
        return res.status(400).send({error: 'Erro: ' + err})
    }
})

module.exports = app => app.use('/api', router);